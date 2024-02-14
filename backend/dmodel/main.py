from flask import Flask, request, jsonify
import numpy as np
from tensorflow.keras.models import load_model
import base64
import cv2
import numpy as np
import io
from PIL import Image

app = Flask(__name__)

# Load the pre-trained model
model = load_model('78%.h5')

# Define classes for exercise classification
classes = ['Squat', 'Jog In Place', 'Jumping Jacks']  # Add your classes here

def preprocess_image(img):
    # Preprocess the image (resize, normalize, etc.)
    # Here, we resize the image to match the input shape of the model
    img = cv2.resize(img, (224, 224))
    img = img / 255.0  # Normalize pixel values to [0, 1]
    return img

@app.route('/classify', methods=['POST'])
def classify():
    # Get the base64 encoded image data from the request
    data_url = request.json['image']

    # Extract the base64 encoded image data
    img_data = base64.b64decode(data_url.split(',')[1])

    # Convert the image data to a numpy array
    img = np.array(Image.open(io.BytesIO(img_data)))

    # Preprocess the image
    img = preprocess_image(img)

    # Expand dimensions to match the model's input shape (batch size = 1)
    img = np.expand_dims(img, axis=0)

    # Make prediction
    prediction = model.predict(img)

    # Get the predicted class label
    predicted_class = np.argmax(prediction)
    class_label = classes[predicted_class]

    # Return the prediction
    return jsonify({'prediction': class_label})

if __name__ == '__main__':
    app.run(debug=True)
