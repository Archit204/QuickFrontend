import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography } from '@mui/material';

function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

 useEffect(() => {
  const email = localStorage.getItem('email');
  if (!email) {
    alert('No email found in storage');
    return;
  }

  axios.get(`/api/user-info?email=${email}`)
    .then(res => setUser(res.data))
    .catch(err => {
      console.error(err);
      alert('Something went wrong');
    });
}, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h4">Your Information</Typography>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>

      <img src={user.qrCodeUrl} alt="Your QR Code" style={{ marginTop: '20px', width: '200px' }} />

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/home')}
        style={{ marginTop: '20px' }}
      >
        Go to Home
      </Button>
    </div>
  );
}

export default ProfilePage;