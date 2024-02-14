import React, { useState } from 'react';
import UserAnalytics from './ExerAnalytics'; 

const UserProfile = ({}) => {

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
    </div>
  );
};

export default UserProfile;
