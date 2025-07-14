import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EditNoteIcon from '@mui/icons-material/EditNote';
import QrCodeIcon from '@mui/icons-material/QrCode';
import EmailIcon from '@mui/icons-material/Email';

const steps = [
  {
    icon: <PersonIcon sx={{ fontSize: 40 }} color="primary" />,
    title: 'Step 1',
    description: 'Enter your personal & medical info in the QuickAid form.'
  },
  {
    icon: <EditNoteIcon sx={{ fontSize: 40 }} color="success" />,
    title: 'Step 2',
    description: 'Submit the form to generate your unique emergency QR.'
  },
  {
    icon: <QrCodeIcon sx={{ fontSize: 40 }} color="secondary" />,
    title: 'Step 3',
    description: 'QR Code is shown on screen and sent to your email.'
  },
  {
    icon: <EmailIcon sx={{ fontSize: 40 }} color="error" />,
    title: 'Step 4',
    description: 'Download or print the QR & keep it with you always!'
  }
];

function HowItWorks() {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', paddingTop: "50px", paddingBottom: { lg: "90px", md: "90px", sm: "50px" ,xs:"50px"}, px: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        How It Works?
      </Typography>
      <Grid container spacing={{ lg: 5, md: 4, sm: 4,xs:2 }} justifyContent="center" sx={{ mt: 4, padding: { lg: "0px", md: "0px" } }}>
        {steps.map((step, index) => (
          <Grid className="hover" item xs={12} sm={6} md={3} sx={{ borderRadius: "15px", width: { lg: "490px", md: "380px", sm: "502px" },
           marginTop: { lg: "0px", md: "0px" } }} key={index}>
            <Paper
              elevation={4}
              sx={{
                textAlign: 'center',
                p: { lg: 8, md: 5, sm: 3 ,xs:3},
                borderRadius: 4,
                // height: '100%'
              }}
            >
              {step.icon}
              <Typography variant="h6" sx={{ mt: 2 }}>
                {step.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {step.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HowItWorks;