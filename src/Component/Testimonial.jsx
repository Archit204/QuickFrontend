import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid } from '@mui/material';

const feedbacks = [
  { name: "Michel", msg: "QuickAid saved my father's life during a train incident. Thank you!", img: "https://i.pravatar.cc/150?img=3" },
  { name: "Merry", msg: "The QR code system is easy and reliable. Highly recommend!", img: "https://i.pravatar.cc/150?img=5" },
  { name: "Henry", msg: "Great ! Works like magic in emergencies,eazy to use and worthly.", img: "https://i.pravatar.cc/150?img=7" },
  { name: "Alex", msg: "Helpfull in emergencie situation, use anytime and any where .", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm22VjO_TCWRKrcNuDNMsZ_-ImiEbzGICJVg&s" }
];

const TestimonialsSection = () => { 
  return (
    <Box sx={{ padding:5 }}>
      <Typography variant="h4" align="center"  sx={{marginTop:"30px",marginBottom:{lg:"50px",md:"80px",sm:"40px",xs:"30px"}}} gutterBottom>
        What Our Users Say
      </Typography>
      <Grid container spacing={{lg:4,md:2,sm:2,xs:2}} justifyContent="center">
        {feedbacks.map((user, index) => (
          <Grid className="hover" item xs={12} md={4} key={index} sx={{width:{lg:"500px",md:"400px",sm:"520px"}}}>
            <Card sx={{ padding: 3,marginBottom:{lg:"0px",md:"0px",sm:""} }}>
              <CardContent>
                <Avatar src={user.img} sx={{ width: 60, height: 60, mb: 2 }} />
                <Typography variant="body1" gutterBottom>"{user.msg}"</Typography>
                <Typography variant="subtitle2" color="text.secondary">- {user.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;