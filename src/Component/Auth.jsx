// src/Pages/AuthPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profession: '',
    license: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (isSignup) {
  //     if (formData.profession.toLowerCase() === 'doctor') {
  //       if (!formData.license) {
  //         alert("License number required for doctors.");
  //         return;
  //       }
  //       navigate('/scan-name'); // Page for doctors
  //     } else {
  //       navigate('/generate'); // Other users
  //     }
  //   } else {
  //     // Handle login
  //     navigate('/generate'); // Login always goes to generate
  //   }
  // };
  // src/Pages/AuthPage.jsx

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (isSignup) {
      const res = await axios.post('http://localhost:3000/api/auth/signup', formData);
      alert(res.data.message || "Signup successful!");
      navigate('/generate');
    } else {
      const res = await axios.post('http://localhost:3000/api/auth/login', formData);
      alert(res.data.message || "Login successful!");
      // Login ke baad profile dikhao
      navigate('/profile');
    }
  } catch (err) {
    alert(err.response?.data?.message || 'Something went wrong.');
  }
};

  return (
    <div className="auth-container">
      <h2>{isSignup ? 'Sign Up' : 'Log In'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <input name="name" onChange={handleChange} placeholder="Name" required />
            <input name="profession" onChange={handleChange} placeholder="Profession" required />
            {formData.profession.toLowerCase() === 'doctor' && (
              <input name="license" onChange={handleChange} placeholder="License Number" required />
            )}
          </>
        )}
        <input name="email" type="email" onChange={handleChange} placeholder="Email" required />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
        <button type="submit">{isSignup ? 'Sign Up' : 'Log In'}</button>
      </form>
      <p onClick={() => setIsSignup(!isSignup)} style={{ cursor: 'pointer', marginTop: '1rem' }}>
        {isSignup ? 'Already have an account? Log in' : 'New here? Sign up'}
      </p>
    </div>
  );
}

export default AuthPage;