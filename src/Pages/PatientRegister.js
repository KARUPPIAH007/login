import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './PatientRegister.css'; // Import the CSS file

const apiUrl = 'http://localhost:8888/patients'; // Update with your actual API URL

function PatientRegister() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState(''); // New state for gender
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Debugging log

    // Basic validation (could be expanded)
    if (!name || !mobile || !email || !address || !gender) {
      setError('All fields are required.');
      return;
    }

    try {
      // Post data to the backend
      const response = await axios.post(apiUrl, {
        name,
        mobile,
        email,
        address,
        gender // Include gender in the request
      });

      console.log('Response:', response); // Debugging log

      if (response.status === 200) {
        // On success
        setSuccess('Registration successful!');
        setError('');
        // Reset form
        setName('');
        setMobile('');
        setEmail('');
        setAddress('');
        setGender('');
      }
    } catch (err) {
      console.error('Error registering patient:', err);
      setError('Registration failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="background">
      <div className="card card-container">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Patient Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                id="mobile"
                className="form-control"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                className="form-control"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <div id="gender" className="form-check">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  className="form-check-input"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="male" className="form-check-label">Male</label>
              </div>
              <div id="gender" className="form-check">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  className="form-check-input"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="female" className="form-check-label">Female</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-3">
              Register
            </button>
            {error && <div className="text-danger text-center mt-2">{error}</div>}
            {success && <div className="text-success text-center mt-2">{success}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default PatientRegister;
