import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import logo from './logoofquickaid.png'
const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1976d2', color: '#fff', py: 6, mt: 10 }}>
      <Container >
        <Grid container spacing={{ xl: 25, md: 16 ,sm:6,xs:9}} sx={{ display: "flex", justifyContent: { lg: "space-evenly", sm: "center" } }}>
          {/* Left: Logo or Site Name */}
          <Grid item xs={12} ml={{ md: 3, sm: 1 }} md={4} sx={{margin:{lg:"0",md:"0",sm:"0",xs:"auto"}}} >
            <Box sx={{ width: { lg: "180px", md: "180px", sm: "120px",xs:"120px" },margin:{xs:"auto"} }}>
              <img src={logo} alt="" style={{ width: "100%" }} />
            </Box>
            <Typography variant="body2" sx={{ fontWeight: "600", textAlign:{xs:"center"},fontSize: { xl: "", lg: "", md: "", sm: "12px" } }}>
              Your Digital Emergency Assistant,  <br /><br /> Always Ready, Always Reliable .  <br /><br />Trust Us ! We Care About You !
            </Typography>
          </Grid>

          {/* Middle: Links */}
          <Grid item xs={12} md={4} sx={{ paddingTop: {  lg: "20px", md: "35px", sm: "25px" },margin:{lg:"0",md:"0",sm:"0",xs:"auto"}}} >
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{fontSize: { lg: "32px", md: "28px", sm: "",xs:"25px" } }}>
              Quick Links
            </Typography>
            <Box sx={{ textAlign:"center ", fontSize: "19px", marginTop:  { lg: "", md: "", sm: "8px" }, fontSize: { xl: "", lg: "18px", md: "18px", sm: "12px" } }}>
              <Link href="/" className="hover glass-shine-effect footer" color="inherit" boxShadow={"none"} bgcolor={"#1976d2"} border={"1px solid #1976d2"} underline="none" display="block" sx={{ padding: "8px" }}>Home</Link>
              <Link href="/signup" className="hover glass-shine-effect footer" color="inherit" boxShadow={"none"} bgcolor={"#1976d2"} border={"1px solid #1976d2"} underline="none" display="block" sx={{ padding: "8px" }}>Generate QR</Link>
              <Link href="/about" className="hover glass-shine-effect footer" color="inherit" boxShadow={"none"} bgcolor={"#1976d2"} border={"1px solid #1976d2"} underline="none" display="block" sx={{ padding: "8px" }}>About</Link>
              <Link href="/contact" className="hover glass-shine-effect footer" color="inherit" boxShadow={"none"} bgcolor={"#1976d2"} border={"1px solid #1976d2"} underline="none" display="block" sx={{ padding: "8px" }}> Contact</Link>
            </Box>
          </Grid>

          {/* Right: Social Icons */}
          <Grid item xs={12} md={4} sx={{margin:{lg:"0",md:"0",sm:"0",xs:"auto"}}}>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ paddingTop: { lg: "20px", md: "30px", sm: "25px" }, fontSize: {  lg: "35px", md: "30px", sm: "14px",xs:"25px" },textAlign:"center" }}>
              Follow Us
            </Typography>
            <Box>
              <IconButton  className="hover glass-shine-effect footer" href="https://facebook.com" target="_blank" sx={{ color: '#fff' }}>
                <Facebook  sx={{fontSize: {  lg: "30px", md: "25px", sm: "15px" }}}/>
              </IconButton>
              <IconButton  className="hover glass-shine-effect footer" href="https://twitter.com" target="_blank" sx={{ color: '#fff' }}>
                <Twitter sx={{fontSize: {  lg: "30px", md: "25px", sm: "15px" }}}/>
              </IconButton>
              <IconButton  className="hover glass-shine-effect footer" href="https://instagram.com" target="_blank" sx={{ color: '#fff' }}>
                <Instagram sx={{fontSize: {  lg: "30px", md: "25px", sm: "15px" }}}/>
              </IconButton>
              <IconButton  className="hover glass-shine-effect footer" href="https://linkedin.com" target="_blank" sx={{ color: '#fff' }}>
                <LinkedIn sx={{fontSize: {  lg: "30px", md: "25px", sm: "15px" }}}/>
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box mt={4} textAlign="center" pt={2}>
          <Typography variant="body2">
            © {new Date().getFullYear()} QuickAid. All rights reserved by <b>Archit</b>  and <b> Jigar</b>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;