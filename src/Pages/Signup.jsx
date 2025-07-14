// // ===============================================old
// import React, { useState } from 'react';
// import { TextField, Button, MenuItem, Box } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const professions = ['doctor', 'lawyer', 'driver', 'engineer', 'other'];

// function Signup() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     profession: '',
//     licenseNumber: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await axios.post('http://localhost:3000/api/auth/signup', formData);

//     alert(res.data.message || 'Signup successful!');

//     localStorage.setItem('userEmail', formData.email);

//     if (formData.profession === 'doctor') {
//       navigate('/scan');
//     } else {
//       navigate('/generate');
//     }

//   } catch (err) {
//     console.error(err);
//     if (err.response?.status === 409) {
//       alert("User Already Exists!");
//     } else {
//       alert(err.response?.data?.message || 'Signup failed.');
//     }
//   }
// };

//   return (
//     <Box>
//       <h1>Signup</h1>
//       <form onSubmit={handleSubmit}>
//         <TextField label="Name" name="name" onChange={handleChange} required fullWidth />
//         <TextField label="Email" name="email" onChange={handleChange} required fullWidth />
//         <TextField label="Password" name="password" onChange={handleChange} required fullWidth />
//         <TextField select label="Profession" name="profession" value={formData.profession} onChange={handleChange} required fullWidth>
//           {professions.map(p => <MenuItem key={p} value={p}>{p}</MenuItem>)}
//         </TextField>
//         {formData.profession === 'doctor' && (
//           <TextField label="License Number" name="licenseNumber" onChange={handleChange} required fullWidth />
//         )}
//         <Button type="submit" variant="contained" fullWidth>Signup</Button>
//         <Box sx={{textAlign:"center",marginTop:"30px"}}>
//        Already have an Account ? <a href="/login" style={{textDecoration:"none"}}> Login</a>
//       </Box>
//       </form>
//     </Box>
//   );
// }

// export default Signup;


// =====================================new 
import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const professions = ['doctor', 'lawyer', 'driver', 'engineer', 'other'];

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profession: '',
    licenseNumber: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://quickbackend-ca5r.onrender.com/api/auth/signup', formData);
      alert(res.data.message || 'Signup successful!');

      localStorage.setItem('userEmail', formData.email);

      if (formData.profession === 'doctor') {
        navigate('/scan');
      } else {
        navigate('/generate');
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed.');
    }
  };

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Paper elevation={4} sx={{ p: 4, width:{lg:400,md:400,sm:400,xs:300} }}>
          <Typography variant="h4" textAlign="center" gutterBottom>
            Sign Up
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Full Name" name="name" onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Email" name="email" type="email" onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Password" name="password" type="password" onChange={handleChange} margin="normal" required />

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

            {formData.profession === 'doctor' && (
              <TextField
                fullWidth
                label="Doctor License Number"
                name="licenseNumber"
                onChange={handleChange}
                margin="normal"
                required
              />
            )}

            <Button className='glass-shine-effect generate signup' fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
              Sign Up
            </Button>

            <Typography textAlign="center" sx={{ mt: 2 }}>
              Already have an account ? <a href="/login">Login</a>
            </Typography>
          </form>
        </Paper>
      </Box>
      <Footer />
    </>
  );
}

export default Signup;