import React, { useState } from 'react';
import WorkoutForm from './WorkoutForm'
import Home from './Home';
import Navbar from './Navbar';
import UserProfile from './UserProfile';
import '../App.css';
import '../Dashboard.css';

const Homepage = () => {
  const [showUserProfile, setShowUserProfile] = useState(false);

  const ArmWorkout = () => {
    window.location.href = '/arm';
  };

  const ShoulderWorkout = () => {
    window.location.href = '/shoulder';
  };

  const UpperWorkout = () => {
    window.location.href = '/upper';
  };

  const LowerWorkout = () => {
    window.location.href = '/lower';
  }

  const handleProfileClick = () => {
    setShowUserProfile(true);
  };

  const handleCloseProfile = () => {
    setShowUserProfile(false);
  };

  const [activeTab, setActiveTab] = useState('exercises');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const ExercisesTab = () => {
    return (
      <div>
        <div className="exercise1 arm-workout" onClick={() => ArmWorkout('pushup')}>
          <h3>Arm Workout</h3>
          <p>Details: Short details about push-up exercise.</p>
        </div>
        <div className="exercise1 shoulder-workout" onClick={() => ShoulderWorkout('squat')}>
          <h3>Shoulder Workout</h3>
          <p>Details: Short details about squat exercise.</p>
        </div>
        <div className="exercise1 upper-body-workout" onClick={() => UpperWorkout('pullup')}>
          <h3>Upper Body Workout</h3>
          <p>Details: Short details about pull-up exercise.</p>
        </div>
        <div className="exercise1 lower-body-workout" onClick={() => LowerWorkout('pullup')}>
          <h3>Lower Body Workout</h3>
          <p>Details: Short details about pull-up exercise.</p>
        </div>
      </div>
    );
  };
  

  const AnalyticsTab = () => {
    return (
      <div>
        <Navbar onProfileClick={handleProfileClick} />
      {showUserProfile && (
          <div className="modal">
            <UserProfile onClose={handleCloseProfile} />
          </div>
      )}
      <WorkoutForm />
      </div>
    );
  };

  return (
    <div className="App">
      <div className="dashboard-container">
      <div className="navigation">
        <div className={`nav-item ${activeTab === 'exercises' ? 'active' : ''}`} onClick={() => handleTabChange('exercises')}>Exercises</div>
        <div className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => handleTabChange('analytics')}>User Analytics</div>
      </div>
      <div className="tab-content">
        {activeTab === 'exercises' && <ExercisesTab />}
        {activeTab === 'analytics' && <AnalyticsTab />}
      </div>
    </div>
    </div>
  );
};

export default Homepage;
