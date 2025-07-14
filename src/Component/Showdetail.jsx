// ===================================old
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function ShowDetail() {
//   const [details, setDetails] = useState(null);

//   useEffect(() => {
//   const email = localStorage.getItem('userEmail');
//   axios.get(`http://localhost:3000/api/qr/get-user-qr?email=${email}`)
//     .then(res => setDetails(res.data.qrUser))
//     .catch(err => console.error(err));
// }, []);

//   if (!details) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>User QR Details</h2>
//       <p>Name: {details.name}</p>
//       <p>Email: {details.email}</p>
//       <p>Phone: {details.phone}</p>
//       <p>Blood Group: {details.bloodgroup}</p>
//       <p>Emergency Contact: {details.emergencycontact}</p>
//     </div>
//   );
// }

// export default ShowDetail;

// ===================================new 


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Paper, Typography, Divider, Button, Stack } from '@mui/material';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

function ShowDetail() {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (!email) {
      alert("No user found");
      return;
    }

    axios.get(`https://quickbackend-ca5r.onrender.com/api/qrusers?email=${email}`)
      .then(res => {
        if (res.data.success && res.data.user) {
          setDetails(res.data.user);
        } else {
          alert("Failed to load QR details");
        }
      })
      .catch(err => {
        console.error(err);
        alert("Failed to load QR details");
      });
  }, []);

  if (!details) return <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</p>;

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 5 }}>
        <Paper elevation={4} sx={{ p: 4, maxWidth: { lg: 600, md: 600, sm: 400, xs: 300 } }}>
          <Typography fontSize={{ lg: "34px", md: "34px", sm: "24px", xs: "20px" }} fontWeight={"bolder"} textAlign="center" gutterBottom>
            Your Emergency QR Details
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <Stack spacing={2}>
            <Box>
              <Typography ><span style={{ fontWeight: "bold" }}>Full Name</span> :- {details.name}</Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box>
              <Typography><span style={{ fontWeight: "bold" }}>Email</span>:- {details.email} </Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box>
              <Typography><span style={{ fontWeight: "bold" }}>Phone</span>:- {details.phone}</Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box>
              <Typography><span style={{ fontWeight: "bold" }}>Blood Group </span>:- {details.bloodgroup}</Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box>
              <Typography><span style={{ fontWeight: "bold" }}>Allergies</span>:- {details.allergies}</Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box>
              <Typography><span style={{ fontWeight: "bold" }}>Medical Condition</span>:- {details.medicalcondition}</Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box>
              <Typography><span style={{ fontWeight: "bold" }}>Disease</span>:- {details.dieses}</Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box>
              <Typography><span style={{ fontWeight: "bold" }}>Emergency Contact </span>:- {details.emergencycontact}</Typography>
            </Box>
          </Stack>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button className='glass-shine-effect generate showdetail'
              variant="outlined"
              sx={{ mt: 4, width: { lg: "200px", md: "200px", sm: "150px", xs: "138px" }, padding: { sm: "2px" }, textAlign: "center", display: 'block', backgroundColor: "#1976d2", color: "white", mx: 'auto' }}
              onClick={() => {
                localStorage.setItem('editUser', JSON.stringify(details));
                window.location.href = '/generate';
              }}
            >
              Edit
            </Button>

            <Button className='glass-shine-effect generate showdetail'
              href="/"
              variant="contained"
              color="primary"
              sx={{ mt: 4, width: { lg: "200px", md: "200px", sm: "150px" }, textAlign: "center", display: 'block', mx: 'auto' }}
            >
              Go to Home
            </Button>
          </Box>

        </Paper>
      </Box>
      <Footer />
    </>
  );
}

export default ShowDetail;