// src/Pages/ContactPage.jsx

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect } from 'react';

function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! ✅");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ minHeight: '80vh'}}>
        <Navbar></Navbar>
      <Typography variant="h4" textAlign="center" sx={{marginTop:"80px"}} gutterBottom>
        📞 Contact Us
      </Typography>
      <Paper
        elevation={4}
        sx={{maxWidth: {lg:600,md:400,sm:350,xs:300}, mx: 'auto',
          p: 4,
          mt: 4,
          transition: '0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: 6,
          },
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            sx={{ mb: 3 }}
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            sx={{ mb: 3 }}
            required
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            multiline
            rows={4}
            sx={{ mb: 3 }}
            required
          />
          <Button className='glass-shine-effect generate send' type="submit" variant="contained" fullWidth>
            Send Message
          </Button>
        </form>
      </Paper>
        <Footer></Footer>
    </Box>
  );
}

export default ContactPage;