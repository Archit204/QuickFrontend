import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <MedicalServicesIcon sx={{ mr: 1 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          QuickAid
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/generate">Generate QR</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;