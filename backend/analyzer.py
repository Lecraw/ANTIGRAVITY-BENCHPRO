"""
BenchPro Backend — Video Analyzer
Real computer vision analysis of basketball game film using YOLOv8 + OpenCV.
"""
import cv2  # type: ignore
import numpy as np  # type: ignore
from ultralytics import YOLO  # type: ignore
from collections import defaultdict
import time
import os
import json

from config import (  # type: ignore
    YOLO_MODEL, YOLO_CONFIDENCE, FRAME_SAMPLE_RATE, UPLOAD_DIR
)
import models  # type: ignore
from ai_coach import generate_coach_feedback  # type: ignore


class VideoAnalyzer:
    """
    Analyzes basketball game film using YOLOv8 for player/ball detection
    and OpenCV for frame processing.
    """

    # COCO class IDs relevant to basketball
    PERSON_CLASS = 0        # "person"
    SPORTS_BALL_CLASS = 32  # "sports ball"

    def __init__(self):
        """Load the YOLO model."""
        print(f"[INFO] Loading YOLO model: {YOLO_MODEL}")
        self.model = YOLO(YOLO_MODEL)
        print("[OK] YOLO model loaded")

    def analyze_video(self, game_id, video_path):
        """
        Main analysis pipeline. Processes a video file and stores results in the database.

        Steps:
        1. Open video, extract metadata
        2. Sample frames at configured rate
        3. Run YOLO detection on each sampled frame
        4. Classify teams by jersey color
        5. Track ball positions
        6. Detect game events
        7. Aggregate stats and store results
        """
        try:
            models.update_game_status(game_id, 'processing', progress=0)
            print(f"\n{'='*60}")
            print(f"[START] Starting analysis for game #{game_id}: {video_path}")
            print(f"{'='*60}\n")

            # ===== Step 1: Open video and get metadata =====
            cap = cv2.VideoCapture(video_path)
            if not cap.isOpened():
                raise ValueError(f"Cannot open video file: {video_path}")

            fps: float = float(cap.get(cv2.CAP_PROP_FPS))
            total_frames: int = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
            width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
            height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
            duration: float = float(total_frames) / fps if fps > 0 else 0.0

            models.update_game_video_info(game_id, duration, fps, total_frames)

            print(f"[VIDEO] Video: {width}x{height} @ {fps:.1f}fps, {duration:.1f}s, {total_frames} frames")
            print(f"[STATS] Sampling every {FRAME_SAMPLE_RATE} frames ({total_frames // FRAME_SAMPLE_RATE} frames to analyze)")

            models.update_game_status(game_id, 'processing', progress=5)

            # ===== Step 2: Process frames =====
            frame_results = []
            player_positions = []    # (frame_num, x, y, w, h, team_label)
            ball_positions = []      # (frame_num, x, y)
            jersey_colors = []       # List of dominant colors for team classification
            player_crops = []        # Cropped player images for color analysis

            frame_num: int = 0
            analyzed_count: int = 0
            frames_to_analyze: int = total_frames // FRAME_SAMPLE_RATE

            while True:
                ret, frame = cap.read()
                if not ret:
                    break

                if frame_num % FRAME_SAMPLE_RATE == 0:
                    # Run YOLO detection
                    detections = self._detect_objects(frame, frame_num)
                    frame_results.append(detections)

                    # Collect player positions and crops for team classification
                    for det in detections['players']:
                        x, y, w, h = det['bbox']
                        player_positions.append({
                            'frame': frame_num,
                            'timestamp': float(frame_num) / fps if fps > 0.0 else 0.0,
                            'bbox': det['bbox'],
                            'confidence': det['confidence'],
                            'center': ((x + w) / 2, (y + h) / 2)
                        })

                        # Crop the player region for color analysis
                        x1, y1 = max(0, int(x)), max(0, int(y))
                        x2, y2 = min(width, int(w)), min(height, int(h))
                        if x2 > x1 and y2 > y1:
                            crop = frame[y1:y2, x1:x2]  # type: ignore
                            dominant = self._get_dominant_color(crop)
                            jersey_colors.append(dominant)
                            player_crops.append({
                                'frame': frame_num,
                                'color': dominant,
                                'bbox': det['bbox']
                            })

                    # Collect ball positions
                    for det in detections['balls']:
                        x, y, w, h = det['bbox']
                        ball_positions.append({
                            'frame': frame_num,
                            'timestamp': float(frame_num) / fps if fps > 0.0 else 0.0,
                            'center': ((x + w) / 2, (y + h) / 2),
                            'confidence': det['confidence']
                        })

                    analyzed_count += 1  # type: ignore

                    # Update progress (5-85% for frame analysis)
                    if frames_to_analyze > 0:
                        progress = 5 + (analyzed_count / frames_to_analyze) * 80
                        if analyzed_count % 10 == 0:
                            models.update_game_status(game_id, 'processing', progress=min(progress, 85))
                            print(f"  [STATS] Frame {frame_num}/{total_frames} ({progress:.0f}%)")

                frame_num += 1

            cap.release()

            print(f"\n[OK] Analyzed {analyzed_count} frames")
            print(f"  [DETECT] Player detections: {len(player_positions)}")
            print(f"  [INFO] Ball detections: {len(ball_positions)}")

            models.update_game_status(game_id, 'processing', progress=85)

            # ===== Step 3: Classify teams by jersey color =====
            team_labels = self._classify_teams(jersey_colors, player_crops)
            home_count = sum(1 for t in team_labels if t == 'home')
            away_count = sum(1 for t in team_labels if t == 'away')

            print(f"  [HOME] Home team detections: {home_count}")
            print(f"  [AWAY] Away team detections: {away_count}")

            models.update_game_status(game_id, 'processing', progress=90)

            # ===== Step 4: Detect game events =====
            events = self._detect_events(player_positions, ball_positions, fps)

            print(f"  [EVENTS] Events detected: {len(events)}")

            # Store events in database
            for event in events:
                models.add_event(
                    game_id,
                    event['type'],
                    event.get('timestamp', 0),
                    event.get('frame', 0),
                    event.get('data', {})
                )

            models.update_game_status(game_id, 'processing', progress=95)

            # Heatmap data is now trend data and generated in step 6.5

            # ===== Step 6: Aggregate stats =====
            stats = self._aggregate_stats(
                frame_results, player_positions, ball_positions,
                events, team_labels, duration, fps
            )

            # ===== Step 6.5: Generate AI Coach Feedback =====
            print("  [AI] Generating AI Coach Feedback...")
            try:
                # Format events for the prompt: e.g. "0:45 possession_change"
                event_strings = [
                    f"{int(e.get('timestamp',0)//60)}:{int(e.get('timestamp',0)%60):02d} {e['type']}" 
                    for e in events
                ]
                coach_feedback = generate_coach_feedback(
                    {
                        'ball_detections': stats['ball']['total_detections'],
                        'player_detections': stats['players']['total_detections'],
                        'avg_confidence': stats['players']['avg_confidence']
                    },
                    event_strings
                )
            except Exception as e:
                print(f"  [WARN] AI Coach generation failed: {e}")
                coach_feedback = "AI Coach is currently unavailable."

                # ===== Step 6.5: Generate Activity Trend =====
            trend_data = self._build_activity_trend(player_positions, fps, duration)

            # ===== Step 7: Save analysis results =====
            analysis_data = {
                'total_players_detected': len(set(
                    (p['frame'], round(p['center'][0], -1), round(p['center'][1], -1))
                    for p in player_positions
                )),
                'home_players': home_count,
                'away_players': away_count,
                'ball_detections': len(ball_positions),
                'total_events': len(events),
                'possession_changes': sum(1 for e in events if e['type'] == 'possession_change'),
                'stats': stats,
                'ai_insights': coach_feedback,
                'activity_trend': trend_data
            }

            models.save_analysis(game_id, analysis_data)
            models.update_game_status(game_id, 'complete', progress=100)

            print(f"\n{'='*60}")
            print(f"[OK] Analysis complete for game #{game_id}")
            print(f"{'='*60}\n")

            return analysis_data

        except Exception as e:
            print(f"[ERROR] Analysis error: {e}")
            import traceback
            traceback.print_exc()
            models.update_game_status(game_id, 'error', error_message=str(e))
            raise

    def _detect_objects(self, frame, frame_num):
        """Run YOLO detection on a single frame."""
        # Use a much lower base confidence to catch blurry/fast-moving balls
        results = self.model(frame, conf=0.05, verbose=False)

        players = []
        balls = []

        for result in results:
            boxes = result.boxes
            if boxes is None:
                continue

            for i in range(len(boxes)):
                cls = int(boxes.cls[i])
                conf = float(boxes.conf[i])
                bbox = boxes.xyxy[i].tolist()  # [x1, y1, x2, y2]

                if cls == self.PERSON_CLASS:
                    # Stricter confidence for players, plus basic shape filtering to remove audience
                    if conf >= YOLO_CONFIDENCE:
                        w = bbox[2] - bbox[0]
                        h = bbox[3] - bbox[1]
                        # Players standing on court: height usually > width, and reasonably large
                        if h > w * 0.7 and h > 50:
                            players.append({
                                'bbox': bbox,
                                'confidence': conf
                            })
                elif cls == self.SPORTS_BALL_CLASS:
                    # Lower confidence threshold for the basketball
                    balls.append({
                        'bbox': bbox,
                        'confidence': conf
                    })

        # Fallback: if YOLO missed the ball, try HSV color tracking (orange/brown)
        if not balls:
            hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
            lower = np.array([5, 100, 100])
            upper = np.array([25, 255, 255])
            mask = cv2.inRange(hsv, lower, upper)
            
            # Find contours in the mask corresponding to ball color
            contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
            if contours:
                largest_contour = max(contours, key=cv2.contourArea)
                if cv2.contourArea(largest_contour) > 50:
                    x, y, w, h = cv2.boundingRect(largest_contour)
                    balls.append({
                        'bbox': [x, y, x + w, y + h],
                        'confidence': 0.6  # Synthetic confidence for HSV detection
                    })

        return {
            'frame': frame_num,
            'players': players,
            'balls': balls,
            'player_count': len(players),
            'ball_count': len(balls)
        }

    def _get_dominant_color(self, crop):
        """
        Get the dominant color of a player crop using K-means clustering.
        Focuses on the jersey area (middle third of the crop).
        """
        if crop.size == 0:
            return (128, 128, 128)

        h, w = crop.shape[:2]

        # Focus on the jersey area (upper-middle portion of the body)
        jersey_region = crop[int(h * 0.15):int(h * 0.5), int(w * 0.2):int(w * 0.8)]

        if jersey_region.size == 0:
            jersey_region = crop

        # Resize for speed
        small = cv2.resize(jersey_region, (20, 20))
        pixels = small.reshape(-1, 3).astype(np.float32)

        # K-means with 2 clusters (jersey + skin/background)
        criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 10, 1.0)
        try:
            _, labels, centers = cv2.kmeans(
                pixels, 2, None, criteria, 3, cv2.KMEANS_PP_CENTERS
            )
            # Return the cluster with more pixels (likely the jersey)
            counts = np.bincount(labels.flatten())
            dominant_idx = np.argmax(counts)
            color = centers[dominant_idx].astype(int)
            return tuple(color.tolist())
        except Exception:
            # Fallback to mean color
            mean = cv2.mean(jersey_region)[:3]
            return (int(mean[0]), int(mean[1]), int(mean[2]))

    def _classify_teams(self, jersey_colors, player_crops):
        """
        Classify players into two teams based on jersey color clustering.
        Uses K-means on all detected jersey colors to find two team clusters.
        """
        if len(jersey_colors) < 2:
            return ['home'] * len(jersey_colors)

        colors_array = np.array(jersey_colors, dtype=np.float32)

        # K-means to find 2 team color clusters
        criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 20, 1.0)
        try:
            _, labels, centers = cv2.kmeans(
                colors_array, 2, None, criteria, 5, cv2.KMEANS_PP_CENTERS
            )

            # Determine perceived brightness (luminance) of each cluster center
            # BGR order: Y = 0.299 R + 0.587 G + 0.114 B
            lum0 = 0.114 * centers[0][0] + 0.587 * centers[0][1] + 0.299 * centers[0][2]
            lum1 = 0.114 * centers[1][0] + 0.587 * centers[1][1] + 0.299 * centers[1][2]

            # Assign teams: light jerseys = home, dark jerseys = away
            light_label = 0 if lum0 > lum1 else 1

            team_labels = []
            for label in labels.flatten():
                team_labels.append('home' if label == light_label else 'away')

            return team_labels
        except Exception:
            return ['home'] * len(jersey_colors)

    def _detect_events(self, player_positions, ball_positions, fps):
        """
        Detect game events based on player and ball positions across frames.
        """
        events = []

        if not player_positions:
            return events

        # Group positions by frame
        players_by_frame = defaultdict(list)
        for p in player_positions:
            players_by_frame[p['frame']].append(p)

        balls_by_frame = defaultdict(list)
        for b in ball_positions:
            balls_by_frame[b['frame']].append(b)

        sorted_frames = sorted(players_by_frame.keys())

        prev_player_count = 0
        prev_ball_x = None

        for frame_num in sorted_frames:
            timestamp = frame_num / fps if fps > 0 else 0
            frame_players = players_by_frame[frame_num]
            frame_balls = balls_by_frame.get(frame_num, [])

            # Event: significant change in player count (could indicate fast break, timeout, etc.)
            current_count = len(frame_players)
            if prev_player_count > 0 and abs(current_count - prev_player_count) >= 3:
                events.append({
                    'type': 'player_count_change',
                    'frame': frame_num,
                    'timestamp': timestamp,
                    'data': {
                        'previous_count': prev_player_count,
                        'current_count': current_count,
                        'change': current_count - prev_player_count
                    }
                })

            prev_player_count = current_count

            # Event: ball position changes (potential possession change)
            if frame_balls:
                ball_x = frame_balls[0]['center'][0]
                if prev_ball_x is not None:
                    # Large lateral movement of ball could indicate possession change
                    dx = abs(ball_x - prev_ball_x)
                    if dx > 200:  # Significant horizontal movement
                        events.append({
                            'type': 'possession_change',
                            'frame': frame_num,
                            'timestamp': timestamp,
                            'data': {
                                'ball_movement': dx,
                                'direction': 'right' if ball_x > prev_ball_x else 'left'
                            }
                        })
                prev_ball_x = ball_x

            # Event: player clustering (potential set play or huddle)
            if len(frame_players) >= 4:
                centers = [p['center'] for p in frame_players]
                avg_dist = self._avg_pairwise_distance(centers)
                if avg_dist < 150:  # Players are clustered together
                    events.append({
                        'type': 'team_huddle',
                        'frame': frame_num,
                        'timestamp': timestamp,
                        'data': {
                            'avg_distance': avg_dist,
                            'player_count': len(frame_players)
                        }
                    })

        return events

    def _avg_pairwise_distance(self, points):
        """Calculate average pairwise distance between points."""
        if len(points) < 2:
            return float('inf')
        total = 0
        count = 0
        for i in range(len(points)):
            for j in range(i + 1, len(points)):
                dx = points[i][0] - points[j][0]
                dy = points[i][1] - points[j][1]
                total += (dx * dx + dy * dy) ** 0.5
                count += 1
        return float(total) / float(count) if count > 0 else float('inf')

    def _build_activity_trend(self, player_positions, fps, total_duration):
        """Build a time-series array of player counts for charting."""
        if not player_positions or fps <= 0 or total_duration <= 0:
            return []

        # Group players by frame
        players_per_frame: dict[int, int] = {}
        for p in player_positions:
            frame_n = p['frame']
            players_per_frame[frame_n] = players_per_frame.get(frame_n, 0) + 1

        # We want roughly 30 data points for a smooth chart, 
        # but at least 1 point per second for short clips.
        num_buckets = min(30, max(5, int(total_duration)))
        bucket_duration_sec = total_duration / num_buckets
        bucket_duration_frames = bucket_duration_sec * fps

        trend = []
        for i in range(num_buckets):
            start_frame = int(i * bucket_duration_frames)
            end_frame = int((i + 1) * bucket_duration_frames)
            
            # Find max players detected in any frame within this bucket
            max_in_bucket = 0
            for f in range(start_frame, end_frame):
                count = players_per_frame.get(f, 0)
                if count > max_in_bucket:
                    max_in_bucket = count
                    
            trend.append({
                'time': float(f"{((i + 0.5) * bucket_duration_sec):.1f}"),
                'players': max_in_bucket
            })

        return trend

    def _aggregate_stats(self, frame_results: list, player_positions: list, ball_positions: list,
                         events: list, team_labels: list, duration: float, fps: float) -> dict:
        """Aggregate all detections into game statistics."""

        # Player detection stats
        total_player_detections = len(player_positions)
        frames_with_players = len(set(p['frame'] for p in player_positions))

        avg_players_per_frame: float = (
            float(total_player_detections) / float(frames_with_players)
            if frames_with_players > 0 else 0.0
        )

        # Max simultaneous players detected
        players_per_frame: dict[int, int] = {}
        for p in player_positions:
            players_per_frame[p['frame']] = players_per_frame.get(p['frame'], 0) + 1
        max_players = max(players_per_frame.values()) if players_per_frame else 0

        # Ball tracking stats
        total_ball_detections = len(ball_positions)
        ball_in_frame_pct: float = (
            float(len(set(b['frame'] for b in ball_positions))) /
            float(len(set(p['frame'] for p in player_positions))) * 100.0
            if player_positions else 0.0
        )

        # Event counts
        event_counts: dict[str, int] = {}
        for e in events:
            event_counts[e['type']] = event_counts.get(e['type'], 0) + 1

        # Average confidence
        avg_conf: float = (
            float(sum(p['confidence'] for p in player_positions)) / float(len(player_positions))
            if player_positions else 0.0
        )

        # Time-based stats
        # Active gameplay is defined by frames where at least one player is detected
        # Multiply by sample rate to get total estimated frames, then divide by fps
        active_seconds: float = (float(frames_with_players) * float(FRAME_SAMPLE_RATE)) / float(fps) if fps > 0 else 0.0
        # Cap active_seconds at actual duration if sample rate math overshoots
        active_seconds = min(active_seconds, float(duration))
        
        events_per_minute: float = float(len(events)) / (active_seconds / 60.0) if active_seconds > 0.0 else 0.0

        stats = {
            'video': {
                'active_seconds': round(active_seconds, 1),  # type: ignore
                'duration_seconds': round(duration, 1),  # type: ignore
                'duration_formatted': f"{int(duration // 60)}:{int(duration % 60):02d}",
                'fps': round(fps, 1),  # type: ignore
                'frames_analyzed': len(frame_results),
            },
            'players': {
                'total_detections': total_player_detections,
                'frames_with_players': frames_with_players,
                'avg_per_frame': round(avg_players_per_frame, 1),  # type: ignore
                'max_simultaneous': max_players,
                'avg_confidence': round(avg_conf * 100, 1),  # type: ignore
            },
            'ball': {
                'total_detections': total_ball_detections,
                'visible_pct': round(ball_in_frame_pct, 1),  # type: ignore
            },
            'events': {
                'total': len(events),
                'per_minute': round(events_per_minute, 1),  # type: ignore
                'breakdown': dict(event_counts),
            },
            'teams': {
                'home_detections': sum(1 for t in team_labels if t == 'home'),
                'away_detections': sum(1 for t in team_labels if t == 'away'),
            }
        }

        return stats


# Singleton instance — loaded once when the module is first imported
_analyzer_instance = None

def get_analyzer():
    """Get or create the singleton VideoAnalyzer instance."""
    global _analyzer_instance
    if _analyzer_instance is None:
        _analyzer_instance = VideoAnalyzer()
    return _analyzer_instance
