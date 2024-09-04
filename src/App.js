import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatLogin from './Pages/patLogin';
import DoctorLogin from './Pages/DoctorLogin';
import AdminLogin from './Pages/AdminLogin';
import DoctorRegister from './Pages/DoctorRegister';
import PatientRegister from './Pages/PatientRegister';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/patient" element={<PatLogin />} />
          <Route path="/doctor" element={<DoctorLogin />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/doctor-register" element={<DoctorRegister />} />
          <Route path="/patient-register" element={<PatientRegister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
