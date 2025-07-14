import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import  '../App.css';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';


const AboutPage = () => {
  return (
    <Box sx={{  py: 6, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
        <Navbar></Navbar>
      <Container>
        <Typography variant="h4" sx={{paddingTop:"80px",textAlign:"center"}} gutterBottom fontWeight="bold">
          About QuickAid
        </Typography>
        <Typography variant="body1"sx={{textAlign:"center"}}  mb={4}>
          QuickAid is a digital emergency information platform that allows users <br />to generate a QR code containing all their vital medical information and emergency contacts.
        </Typography>

        <Grid container spacing={8} sx={{display:"flex",justifyContent:"center"}} >

          <Grid item xs={12} md={6} sx={{width:"1000px"}} className="hover">
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom fontWeight="bold" sx={{textAlign:{lg:"start",md:"start",sm:"center",xs:"center"}}}>
                🧭 Our Mission
              </Typography>
              <Typography variant="body2">
                To provide instant access to lifesaving medical details during emergencies, helping first responders and medical professionals act quickly.
              </Typography>
            </Paper>
          </Grid>

          <Grid  item xs={12} md={6} sx={{width:"1000px"}} className="hover">
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom fontWeight="bold" sx={{textAlign:{lg:"start",md:"start",sm:"center",xs:"center"}}}>
                🚀 Our Vision
              </Typography>
              <Typography variant="body2">
                A future where everyone carries their medical history securely and can be assisted within seconds by just scanning a QR code.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sx={{width:"1000px"}} className="hover">
            <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
              <Typography variant="h6" gutterBottom fontWeight="bold" sx={{textAlign:{lg:"start",md:"start",sm:"center",xs:"center"}}}>
                🌟 Features
              </Typography>
              <ul style={{ marginTop: 8, marginBottom: 0 }}>
                <li>Generate emergency QR codes</li>
                <li>Store allergies, blood group, diseases</li>
                <li>Email QR to user automatically</li>
                <li>Quick and easy scanning during crisis</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default AboutPage;