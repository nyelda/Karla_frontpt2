import React, { useState } from 'react';
import UserAnalytics from './UserAnalytics'; 

const UserProfile = ({ onClose }) => {

  // Handle logout
  const handleLogout = () => {
    alert('Logout successful!');
    window.location.href = '/';
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
