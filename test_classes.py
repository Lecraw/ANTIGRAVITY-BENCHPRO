from ultralytics import YOLO
import cv2
import os

model = YOLO('yolov8m.pt')

# check what videos we have in uploads
files = os.listdir('/Users/leonelhoffmann/Desktop/ANTIGRAVITY BENCHPRO/backend/uploads')
print(f"Files in uploads: {files}")
video_file = next((f for f in files if f.endswith('test_shot.mp4')), None)

if not video_file:
    print("No video found")
    exit()

video_path = f'/Users/leonelhoffmann/Desktop/ANTIGRAVITY BENCHPRO/backend/uploads/{video_file}'
print(f"Testing video {video_path}")
cap = cv2.VideoCapture(video_path)
classes_found = set()
frames_processed = 0

while frames_processed < 90:
    ret, frame = cap.read()
    if not ret: break
    results = model(frame, verbose=False)
    for r in results:
        if r.boxes:
            for c in r.boxes.cls:
                classes_found.add(int(c))
    frames_processed += 1

print(f"Classes found IDs: {classes_found}")
names = model.names
print("Class names:", [names[c] for c in classes_found])
