import React, { useState } from 'react';
import '../Dashboard.css';
import '../App.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('exercises');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard-container">
      <div className="navigation">
        <div className={`nav-item ${activeTab === 'exercises' ? 'active' : ''}`} onClick={() => handleTabChange('exercises')}>Exercises</div>
        <div className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => handleTabChange('analytics')}>User Analytics</div>
        <div className={`nav-item ${activeTab === 'faq' ? 'active' : ''}`} onClick={() => handleTabChange('faq')}>FAQ</div>
      </div>
      <div className="tab-content">
        {activeTab === 'exercises' && <ExercisesTab />}
        {activeTab === 'analytics' && <AnalyticsTab />}
        {activeTab === 'faq' && <FaqTab />}
      </div>
    </div>
  );
};

const ExercisesTab = () => {
    const bodyweightExercises = [
        { name: 'Push-up', bodyPart: 'Chest, Shoulders, Triceps', difficulty: 'Intermediate' },
        { name: 'Squat', bodyPart: 'Quadriceps, Hamstrings, Glutes', difficulty: 'Beginner' },
        { name: 'Pull-up', bodyPart: 'Back, Biceps', difficulty: 'Advanced' },
        { name: 'Plank', bodyPart: 'Core', difficulty: 'Intermediate' },
        { name: 'Lunge', bodyPart: 'Quadriceps, Hamstrings, Glutes', difficulty: 'Intermediate' },
        { name: 'Burpee', bodyPart: 'Full body', difficulty: 'Intermediate' },
      ];

  return (
    
    <div className="exercise-container">
      <h2>Bodyweight Exercises</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Body Part</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {bodyweightExercises.map((exercise, index) => (
            <tr key={index}>
              <td>{exercise.name}</td>
              <td>{exercise.bodyPart}</td>
              <td>{exercise.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AnalyticsTab = () => {
  return (
    <div>
      <h2>User Analytics</h2>
      {/* Analytics content */}
    </div>
  );
};

const FaqTab = () => {
  return (
    <div>
      <h2>FAQ</h2>
      {/* FAQ content */}
    </div>
  );
};

export default Dashboard;
