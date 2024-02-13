import React, { useState } from 'react';
import Webcam from 'react-webcam';

const Register = ({ onClose }) => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [showCamera, setShowCamera] = useState(false);

  // Handle input changes
  const cameraClick = () => {
    setShowCamera(true);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsEditing(true);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
    setIsEditing(true);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (name.trim() !== '' && weight.trim() !== '' && height.trim() !== '') {
      alert('Login successful!');
      window.location.href = '/homepage';
    } else {
      alert('Please input all fields.');
    }
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
      {showCamera && (
        <div className="camera-container">
          <Webcam />
        </div>
      )}
      <div className="button-container">
        <button onClick={handleLogin} style={styles.button}>READY!</button>
        <button onClick={cameraClick} style={styles.button}>Open</button>
      </div>
    </div>
  );
};

export default Register;

const styles = {
    button: {
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    
  };