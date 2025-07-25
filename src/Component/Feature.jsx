// import React from 'react';
// import { Grid, Box, Typography, Card, CardContent } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import QrCodeIcon from '@mui/icons-material/QrCode';
// import EmailIcon from '@mui/icons-material/Email';
// import PeopleIcon from '@mui/icons-material/People';

// const features = [
//   {
//     title: 'Emergency Info at a Scan',
//     description: 'Anyone can scan your QR to view your emergency profile instantly.',
//     icon: <QrCodeIcon color="primary" sx={{ fontSize: 40 }} />
//   },
//   {
//     title: 'Medical Details Stored Securely',
//     description: 'Your allergies, conditions, blood group & contacts stored safely.',
//     icon: <FavoriteIcon color="error" sx={{ fontSize: 40 }} />
//   },
//   {
//     title: 'Instant QR Delivery via Email',
//     description: 'Your QR code is automatically emailed for printing or saving.',
//     icon: <EmailIcon color="secondary" sx={{ fontSize: 40 }} />
//   },
//   {
//     title: 'Perfect for Elders & Kids',
//     description: 'Ideal for students, elderly people or patients with conditions.',
//     icon: <PeopleIcon color="success" sx={{ fontSize: 40 }} />
//   }
// ];

// function FeaturesSection() {
//   return (
//     <Box sx={{ bgcolor: '#fff', py: 6 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Why Choose QuickAid?
//       </Typography>
//       <Grid container spacing={4} justifyContent="center" sx={{ mt: 3}}>
//         {features.map((item, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card sx={{ textAlign: 'center',height:"200px",width:"70%",border:"2px solid red", p: 2, borderRadius: 3, boxShadow: 4 }}>
//               <CardContent>
//                 {item.icon}
//                 <Typography variant="h6" sx={{ mt: 1 }}>
//                   {item.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//                   {item.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

// export default FeaturesSection;











import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import QrCodeIcon from '@mui/icons-material/QrCode';
import EmailIcon from '@mui/icons-material/Email';
import PeopleIcon from '@mui/icons-material/People';

function FeaturesSection() {
  const boxStyle = {
    height: '250px',
    width:{lg:"400px",md:"400px",sm:"500px",xs:"320px"},
    border: '2px solid #1976d2',
    borderRadius: 3,
    boxShadow: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    p: 2,
  };

  return (
    <Box sx={{ bgcolor: '#fff', paddingBottom:"30px"}} >
      <Typography  sx={{marginTop:"80px",fontSize:{lg:"40px",md:"35px",sm:"30px",xs:"25px"},fontWeight:"bold"}} align="center" gutterBottom>
        Why Choose QuickAid?
      </Typography>
      <Box sx={{display:"flex",flexWrap:"wrap",pt:3,margin:"auto"}}>


      <Grid container spacing={{lg:6,md:3,sm:3,xs:3} } justifyContent="center" sx={{ mt: 1 }}>


        {/* First Row */}
        <Grid className="hover" item xs={12} md={6} display="flex" justifyContent="center" sx={{borderRadius:"9px",width:{md:"400px"}}} bgcolor={"#1976d21f"}>
          <Box sx={boxStyle}>
            <QrCodeIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="h6" sx={{ mt: 1 }}>
              Emergency Info at a Scan
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Anyone can scan your QR to view your emergency profile instantly.
            </Typography>
          </Box>
        </Grid>

        <Grid className="hover" item xs={12} md={6} display="flex" justifyContent="center" sx={{borderRadius:"9px",width:{md:"400px"}}} bgcolor={"#1976d21f"}>
          <Box sx={boxStyle}>
            <FavoriteIcon color="error" sx={{ fontSize: 40 }} />
            <Typography variant="h6" sx={{ mt: 1 }}>
              Medical Details Stored Securely
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Your allergies, conditions, blood group & contacts stored safely.
            </Typography>
          </Box>
        </Grid>

        {/* Second Row */}
        <Grid className="hover" item xs={12} md={6} display="flex" justifyContent="center" sx={{borderRadius:"9px",width:{md:"400px"}}} bgcolor={"#1976d21f"}>
          <Box sx={boxStyle}>
            <EmailIcon color="secondary" sx={{ fontSize: 40 }} />
            <Typography variant="h6" sx={{ mt: 1 }}>
              Instant QR Delivery via Email
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Your QR code is automatically emailed for printing or saving.
            </Typography>
          </Box>
        </Grid>

        <Grid className="hover" item xs={12} md={6} display="flex" justifyContent="center" sx={{borderRadius:"9px",width:{md:"400px"}}} bgcolor={"#1976d21f"}>
          <Box sx={boxStyle}>
            <PeopleIcon color="success" sx={{ fontSize: 40 }} />
            <Typography variant="h6" sx={{ mt: 1 }}>
              Perfect for Elders & Kids
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Ideal for students, elderly people or patients with conditions.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      </Box>
    </Box>
  );
}

export default FeaturesSection;
