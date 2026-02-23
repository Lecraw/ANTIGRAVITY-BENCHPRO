"""
Swish Analyzer — Thin wrapper around the VideoAnalyzer for single-shot analysis.
"""
import os
import cv2  # type: ignore
import numpy as np  # type: ignore


def analyze_basketball_shot(video_path):
    """
    Analyze a basketball shot video and return a summary dict.

    Args:
        video_path: Path to a video file (mp4, mov, etc.)

    Returns:
        dict with keys: ball_detected, frames_analyzed, duration, summary
    """
    if not os.path.exists(video_path):
        return {'error': f'File not found: {video_path}'}

    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        return {'error': f'Cannot open video: {video_path}'}

    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    duration = total_frames / fps if fps > 0 else 0

    # Simple frame sampling analysis
    ball_detections = 0
    frames_analyzed = 0
    sample_rate = max(1, total_frames // 30)  # Analyze ~30 frames

    frame_num = 0
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        if frame_num % sample_rate == 0:
            frames_analyzed += 1
            # Basic orange/brown ball color detection via HSV
            hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
            lower = np.array([5, 100, 100])
            upper = np.array([25, 255, 255])
            mask = cv2.inRange(hsv, lower, upper)
            if cv2.countNonZero(mask) > 50:
                ball_detections += 1
        frame_num += 1

    cap.release()

    return {
        'ball_detected': ball_detections > 0,
        'ball_frames': ball_detections,
        'frames_analyzed': frames_analyzed,
        'total_frames': total_frames,
        'fps': round(float(fps), 1),  # type: ignore
        'duration_seconds': round(float(duration), 1),  # type: ignore
        'summary': (
            f'Analyzed {frames_analyzed} frames from {duration:.1f}s video. '
            f'Ball detected in {ball_detections}/{frames_analyzed} sampled frames.'
        )
    }