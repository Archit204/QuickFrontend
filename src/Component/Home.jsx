import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

import back from './young-handsome-physician-medical-robe-with-stethoscope_1303-17818.avif'
import '../App.css'

function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <Box className="Qickaid" sx={{ bgcolor: '#f5f5f5', minHeight:{lg:'90vh',md:'90vh',sm:'90vh',xs:'70vh'} ,pt:{lg:12,md:12,sm:12,xs:1},backgroundSize:"cover"}}>
        {/* <Container maxWidth="md" sx={{ md:{margin:"0px", background:"red"}}}> */}
          {/* <Box > */}
              <Box sx={{width:"50%",textAlign:"center",p:4}}>

            <MedicalServicesIcon color="primary" sx={{ fontSize: {lg:60,md:60,sm:50,xs:40} }} />


            <Typography sx={{fontSize:{lg:"40px",md:"35px",sm:"30px",xs:"25px"}}}gutterBottom>
              QuickAid
            </Typography>
            <Typography sx={{fontSize:{lg:"25px",md:"25px",sm:"20px",xs:"18px"},letterSpacing:{lg:"0px",md:"0px",sm:"0px",xs:"-1px"}  }} color="black"  textAlign={"justify"}>
              A life-saving QR emergency card for everyone. Generate your emergency profile and keep it safe — available, even without internet. Always Ready , Always Reliable !
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/login"
              sx={{ mt: 3,fontSize:{lg:"18px",md:"18px",sm:"15px",xs:"10px"} }}
              className='glass-shine-effect generate'
              >
              Generate QR Now
            </Button>
              </Box>
          {/* </Box> */}
        {/* </Container> */}
      </Box>
    </>
  );
}

export default HomePage;