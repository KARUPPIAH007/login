// src/Pages/DoctorLogin.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Doctorlogin.css'; // Create this CSS file if needed

const apiUrl = 'http://localhost:8888/doctors'; // Update with your actual API URL

function DoctorLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Debugging log

    // Basic validation
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    try {
      const response = await axios.post(apiUrl, {
        username,
        password
      });

      console.log('Response:', response); // Debugging log

      if (response.status === 200) {
        setSuccess('Login successful!');
        setError('');
        // Handle successful login (e.g., redirect)
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('Login failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="background">
      <div className="card card-container">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Doctor Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-3">
              Login
            </button>
            {error && <div className="text-danger text-center mt-2">{error}</div>}
            {success && <div className="text-success text-center mt-2">{success}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorLogin;
