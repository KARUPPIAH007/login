import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './patlogin.css'; // Ensure the CSS file is correctly named and imported
import axios from 'axios';

const dataUrl = 'http://localhost:8888/users'; // Update with your actual API URL

function PatientLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(dataUrl);
      const data = response.data;
      console.log(data); // Log the fetched data for debugging

      const user = data.find(user => user.username === username && user.password === password);

      if (user) {
        console.log('Patient Login Successful:', { username, password });
        setError('');
        // You might want to redirect or handle successful login here
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Error fetching data');
    }
  };

  return (
    <div className="background">
      <div className="card card-container">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Patient Login</h2>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default PatientLogin;
