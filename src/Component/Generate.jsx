import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import QRForm from '../Component/QRForm';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const GeneratePage = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    bloodgroup: '',
    allergies: '',
    medicalcondition: '',
    disease: '',
    emergencycontact: '',
    profession: '',
    doctorLicense: ''
  });

  useEffect(() => {
    const editUser = localStorage.getItem('editUser');
    if (editUser) {
      setFormData(JSON.parse(editUser));
      localStorage.removeItem('editUser');
    }
  }, []);

  return (
    <Box>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: '10px',
              border: '2px solid #1976d2',
            }}
          >
            <Typography sx={{fontSize:{lg:"24px",md:"24px",sm:"18px"},fontWeight:"bolder"}} gutterBottom align="center">
              Generate Your Emergency QR Code
            </Typography>
            <Typography sx={{fontSize:{lg:"18px",md:"18px",sm:"18px"}}} align="center">
              Fill out the form below to generate and receive your QR code instantly on email.
            </Typography>

            <Box
              sx={{
                mt: 4,
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              {/* Pass formData and setFormData  */}
              <QRForm formData={formData} setFormData={setFormData} />
            </Box>
          </Paper>
        </Container>
      </motion.div>
      <Footer />
    </Box>
  );
};

export default GeneratePage;