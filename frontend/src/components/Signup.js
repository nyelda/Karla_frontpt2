import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    if (username.trim() !== '' && password.trim() !== '') {

        const accounts = {username, password}

      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({accounts}),
        });

        if (response.ok) {
          setUsername('')
          setPassword('')
          alert('Signup successful! Redirecting to login page.');
          window.location.href = '/login';
        } else {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Signup</h2>
      <form onSubmit={handleSignup} style={styles.form}>
        <div>
          <label htmlFor="username" style={styles.label}>Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="password" style={styles.label}>Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Signup</button>
      </form>
      <div style={styles.loginLink}>
        Already have an account? <Link to="/login" style={styles.link}>Login here</Link>.
      </div>
    </div>
  );
};

export default Signup;

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginTop: '50px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  loginLink: {
    marginTop: '10px',
    textAlign: 'center',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};