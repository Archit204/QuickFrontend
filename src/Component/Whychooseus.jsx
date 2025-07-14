import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const WhyChooseUs = () => {
  return (
    <Box sx={{ padding: {lg:"88px 0px",md:"88px 0px",sm:"88px 0px",xs:"38px 0px"},display:"flex",justifyContent:"center",width:"100%" }}>
      <Grid className="whychoose" container spacing={{lg:1,md:1,sm:3,xs:4}} sx={{display:"flex",justifyContent:"center",width:{lg:"1126px",md:"100%",sm:"100%"},padding:{lg:"0px",md:"20px",sm:""}}}>
        <Grid item xs={12} md={4} sx={{width:{lg:"369px",md:"280px",sm:"580px"},textAlign:{lg:"none",md:"none",sm:"center",xs:"center"}}}>
          <Typography sx={{fontSize:{lg:"20px",md:"15px"}}}><SecurityIcon sx={{fontSize:{lg:"20px",md:"18px"}}}/> Secure & Reliable</Typography>
          <Typography sx={{fontSize:{lg:"16px",md:"10px"}}}>emergency data stored securely in MongoDB.</Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{width:{lg:"369px",md:"280px",sm:"580px"},textAlign:{lg:"none",md:"none",sm:"center",xs:"center"}}}>
          <Typography sx={{fontSize:{lg:"20px",md:"15px"}}}><SpeedIcon sx={{fontSize:{lg:"20px",md:"18px"}}}/> Fast QR Delivery</Typography>
          <Typography sx={{fontSize:{lg:"16px",md:"10px"}}}>Get your QR in seconds via email and on screen.</Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{width:{lg:"369px",md:"280px",sm:"580px"},textAlign:{lg:"none",md:"none",sm:"center",xs:"center"}}}>
          <Typography sx={{fontSize:{lg:"20px",md:"15px"}}}><SupportAgentIcon sx={{fontSize:{lg:"20px",md:"18px"}}}/> 24x7 Support</Typography>
          <Typography sx={{fontSize:{lg:"16px",md:"10px"}}}>We’re always here to help when you need us.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;