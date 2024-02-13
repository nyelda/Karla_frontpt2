import React, { useState } from 'react';
import Exercise from './Exercise';
import Webcam from 'react-webcam';
import '../App.css';

const Shoulder = () => {
const [showCamera, setShowCamera] = useState(false);

const handleExerciseClick = () => {
    setShowCamera(true);
};

const handleCloseCamera = () => {
    setShowCamera(false);
};

const handleBackToHomepage = () => {
  window.location.href = '/homepage'; 
};

    return (
      <div>
        <div className="exercise-list">
        {[...Array(9)].map((_, index) => (
          <Exercise
            key={index}
            name={`Exercise ${index + 1}`}
            details="Short details"
            onClick={handleExerciseClick}
          />
        ))}
      </div>
      {showCamera && (
        <div className="camera-popup">
          <button onClick={handleCloseCamera}>Go Back</button>
          <Webcam />
        </div>
      )}
        <div className="button-container">
            <button onClick={handleBackToHomepage}>Back to Homepage</button>
        </div>
      </div>
    );
  };


export default Shoulder;