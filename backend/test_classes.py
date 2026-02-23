from ultralytics import YOLO
import cv2

model = YOLO('yolov8n.pt')
cap = cv2.VideoCapture('/Users/leonelhoffmann/Desktop/ANTIGRAVITY BENCHPRO/uploads/test_shot.mp4')
classes_found = set()

for i in range(30):
    ret, frame = cap.read()
    if not ret: break
    results = model(frame, verbose=False)
    for r in results:
        if r.boxes:
            for c in r.boxes.cls:
                classes_found.add(int(c))

print("Classes found:", classes_found)
