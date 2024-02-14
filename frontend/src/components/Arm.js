import React, { useState } from 'react';
import Exercise from './Exercise';
import ExerAnalytics from './ExerAnalytics'; 
import Webcam from 'react-webcam';
import '../App.css';

const Arm = () => {
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

  // Sample user analytics data
  const userAnalyticsData = {
    totalVisits: 100,
    subscriptionStatus: 'Active',
    // Add more analytics data as needed
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
          <Webcam 
          height={800} // Set the height of the camera
          width={1300}
          />
        </div>
      )}
      <div className="user-analytics-container">
        {/* Render UserAnalytics component */}
        <ExerAnalytics data={userAnalyticsData} />
      </div>
      <div className="button-container">
        <button onClick={handleBackToHomepage}>Back to Homepage</button>
      </div>
    </div>
  );
};

export default Arm;
