import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import '../App.css'

const NotesSection = () => {
  return (
    <Box sx={{ py: 6,mt:{lg:6,md:6,sm:5,xs:1}, backgroundColor: "#f5f5f5" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        Notes!
      </Typography>

      <Grid  container spacing={3} justifyContent="center">

        <Grid className="hover" item xs={12} sm={6} md={3} sx={{width:{lg:"580px",md:"400px",xs:"350px"}}}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center",padding:"40px" }}>
            <Typography variant="h6" sx={{ fontWeight: "600", mb: 1 }}>
              Only Doctors Can Scan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Only registered doctors are allowed to scan the QR codes on this website.
            </Typography>
          </Paper>
        </Grid>

        <Grid className="hover" item xs={12} sm={6} md={3} sx={{width:{lg:"580px",md:"400px",xs:"350px"}}}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center",padding:"40px" }}>
            <Typography variant="h6" sx={{ fontWeight: "600", mb: 1 }}>
              License Required
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Doctors must compulsorily enter their license number when verify credentials.
            </Typography>
          </Paper>
        </Grid>

        <Grid className="hover" item xs={12} sm={6} md={3} sx={{width:{lg:"580px",md:"400px",xs:"350px"}}}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center",padding:"40px" }}>
            <Typography variant="h6" sx={{ fontWeight: "600", mb: 1 }}>
              Emergency Use
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This website is designed for emergency medical situations. Use responsibly.
            </Typography>
          </Paper>
        </Grid>

        <Grid className="hover" item xs={12} sm={6} md={3} sx={{width:{lg:"580px",md:"400px",xs:"350px"}}}  >
          <Paper elevation={3} sx={{ p: 3, textAlign: "center",padding:"40px" }}>
            <Typography variant="h6" sx={{ fontWeight: "600", mb: 1 }}>
              Data Privacy
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your personal information is secured and used generating emergency QR.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotesSection;