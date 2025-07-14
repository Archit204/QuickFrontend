// =========================old 


// import React, { useState } from 'react';
// import { TextField, Button, MenuItem, Box } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const professions = ['doctor', 'lawyer', 'driver', 'engineer', 'other'];

// function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     profession: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const res = await axios.post('http://localhost:3000/api/auth/login', formData);
//   alert(res.data.message);
//   localStorage.setItem('userEmail', formData.email);
//   navigate(res.data.redirectTo);
// };


//   return (
//     <Box>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <TextField label="Email" name="email" onChange={handleChange} required fullWidth />
//         <TextField label="Password" name="password" onChange={handleChange} required fullWidth />
//         <TextField select label="Profession" name="profession" value={formData.profession} onChange={handleChange} required fullWidth>
//           {professions.map(p => <MenuItem key={p} value={p}>{p}</MenuItem>)}
//         </TextField>
//         <Button type="submit" variant="contained" fullWidth>Login</Button>
//       </form>
//     </Box>
//   );
// }

// export default Login;


// ===========================new


import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const professions = ['doctor', 'lawyer', 'driver', 'engineer', 'other'];

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    profession: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://quickbackend-ca5r.onrender.com/api/auth/login', formData);

      alert(res.data.message || 'Login successful!');

      localStorage.setItem('userEmail', formData.email);

      if (formData.profession === 'doctor') {
        navigate('/scan');
      } else {
        navigate('/showdetail');
      }

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Login failed!');
    }
  };

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Paper elevation={4} sx={{ p: 4, width: {lg:400,md:400,sm:400,xs:300}}}>
          <Typography variant="h4" textAlign="center" gutterBottom>
            Login
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              select
              fullWidth
              label="Profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              margin="normal"
              required
            >
              {professions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </MenuItem>
              ))}
            </TextField>

            <Button className='glass-shine-effect generate signup' fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
              Login
            </Button>

            <Typography textAlign="center" sx={{ mt: 2 }}>
              Don&apos;t have an account ? <a href="/signup">Signup</a>
            </Typography>
          </form>
        </Paper>
      </Box>
      <Footer />
    </>
  );
}

export default Login;