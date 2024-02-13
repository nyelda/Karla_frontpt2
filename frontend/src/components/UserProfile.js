import React, { useState } from 'react';
import UserAnalytics from './UserAnalytics'; 

const UserProfile = ({ onClose }) => {
  // Define state variables for name, height, weight
  const [name, setName] = useState('Anita Max Wynn');
  const [height, setHeight] = useState('100 cm');
  const [weight, setWeight] = useState('10 kg');
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsEditing(true);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
    setIsEditing(true);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
    setIsEditing(true);
  };

  // Handle save changes
  const handleSaveChanges = () => {
    // Save changes logic goes here
    setIsEditing(false);
  };

  // Handle logout
  const handleLogout = () => {
    alert('Logout successful!');
    window.location.href = '/login';
  };

  // Sample user analytics data
  const userAnalyticsData = {
    totalVisits: 100,
    subscriptionStatus: 'Active',
    // Add more analytics data as needed
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input type="text" id="height" value={height} onChange={handleHeightChange} />
      </div>
      <div>
        <label htmlFor="weight">Weight:</label>
        <input type="text" id="weight" value={weight} onChange={handleWeightChange} />
      </div>
      {isEditing && (
        <div>
          <button onClick={handleSaveChanges}>Save Changes</button>
        </div>
      )}
      <div className="user-analytics-container">
        {/* Render UserAnalytics component */}
        <UserAnalytics data={userAnalyticsData} />
      </div>
      <div className="button-container">
        <button onClick={onClose}>Close</button>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default UserProfile;
