import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

function ProfilePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const res = await axios.get('http://localhost:3000/api/auth/me'); // backend me banana padega
      setUser(res.data);
    }
    fetchUser();
  }, []);

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Box>
      <Navbar />
      <Box sx={{ p: 5 }}>
        <Typography variant="h4">Welcome {user.name}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Phone: {user.phone}</Typography>
        <img src={user.qrUrl} alt="Your QR" />
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          onClick={() => navigate('/home')}
        >
          Go To Home
        </Button>
      </Box>
      <Footer />
    </Box>
  );
}

export default ProfilePage;