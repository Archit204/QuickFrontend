// FeaturesSection.jsx
import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import QrCodeIcon from '@mui/icons-material/QrCode';
import EmailIcon from '@mui/icons-material/Email';

const features = [
  { icon: <QrCodeIcon fontSize="large" />, title: "Instant QR Generation", desc: "Generate your emergency QR ." },
  { icon: <HealthAndSafetyIcon fontSize="large" />, title: "Medical Info Safety", desc: "Your data is secure and encrypted." },
  { icon: <EmailIcon fontSize="large" />, title: "Send QR via Email", desc: "Automatically send QR to your email." },
];

const FeaturesSection = () => {
  return (
    <Box  sx={{padding:{lg:"0px 63px",md:"0px 63px",sm:"0px 63px",xs:"0px 15px"},paddingBottom:{lg:"40px",md:"40px",sm:"40px",xs:"0px"}}}>
      <Typography variant="h4" sx={{paddingBottom:{lg:"45px",md:"45px",sm:"45px",xs:"15px"},marginTop:{lg:"100px",md:"100px",sm:"100px",xs:"70px"} , fontFamily:"sans-serif",fontWeight:"bold"}} align="center" gutterBottom>
        KEY FEATURE
      </Typography>
      <Grid container  justifyContent={"center"} spacing={{lg:4,md:2,sm:2}}>
        {features.map((f, index) => (
          <Grid className="hover" item xs={12} md={4} key={index} sx={{width:{lg:"300px",md:"200px",sm:"450px",xs:"380px"},margin:{lg:"0px",md:"0px",sm:"0px",xs:"8px"}}}>
            <Card sx={{ textAlign: 'center', width:{lg:"270px",md:"168px",sm:"415px"},padding: 2 }}>
              <CardContent>
                {f.icon}
                <Typography variant="h6">{f.title}</Typography>
                <Typography variant="body2" color="text.secondary">{f.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;