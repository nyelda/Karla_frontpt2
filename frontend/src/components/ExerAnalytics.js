import React from 'react';

const UserAnalytics = ({ data }) => {
  return (
    <div className="user-analytics">
      <h3>User Analytics</h3>
      <ul>
        <li>Date: {data.date}</li>
        <li>Reps: {data.reps}</li>
      </ul>
    </div>
  );
};

export default UserAnalytics;
