import React from 'react';

const UserAnalytics = ({ data }) => {
  return (
    <div className="user-analytics">
      <h3>User Analytics</h3>
      <ul>
        <li>Date: {data.date}</li>
        <li>Executed Exercise/s: {data.Exercises}</li>
        {/* Add more analytics data as needed */}
      </ul>
    </div>
  );
};

export default UserAnalytics;
