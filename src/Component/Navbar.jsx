import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../Component/logoofquickaid.png'
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import Drawer from './Drawer';

const Navbar = () => {
  return (
    <AppBar position="static" >
      <Toolbar sx={{ display: 'flex', justifyContent: {lg:"space-between",md:"space-between",sm:"space-between",xs:"space-between"},gap:{sm:"27px",xs:"72px"} }}>


          <Drawer sx={{display:{lg:"none",md:"none",sm:"none",xs:"block"}}}></Drawer>


        <Typography variant="h6">
          <Box sx={{width:{lg:"120px",md:"120px",sm:"90px",xs:"70px"},marginLeft:{lg:"40px",md:"40px",sm:"0px"}}}>
          <img src={logo} width={"100%"} style={{display:"block"}} alt="" />
          </Box>
          </Typography>
        <Box  sx={{width:{lg:"490px",md:"400px",sm:"371px"},marginRight:{lg:"0px",md:"0px",sm:"0px"},display:"flex",display:{lg:"block",md:"block",sm:"block",xs:"none"}}}>
          <Button color="inherit" className='hover' component={Link} to="/" sx={{fontSize:{lg:"17px",md:"15px",sm:"13px"},marginRight:{lg:"15px",md:"5px",sm:"5px"}}} >Home</Button>
          <Button color="inherit" className='hover' component={Link} to="/about" sx={{fontSize:{lg:"17px",md:"15px",sm:"13px",marginRight:{lg:"15px",md:"5px",sm:"5px"}}}}>About</Button>
          <Button color="inherit" className='hover' component={Link} to="/contact" sx={{fontSize:{lg:"17px",md:"15px",sm:"13px",marginRight:{lg:"15px",md:"5px",sm:"5px"}}}}>Contact-Us</Button>
          <Button color="inherit" className='hover' component={Link} to="/signup" sx={{fontSize:{lg:"17px",md:"15px",sm:"13px"}}}>Signup/Login</Button>
          {/* <Button color="inherit" component={Link} to="/generate">Generate QR</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          Add more links here like About, Contact etc */}
        </Box>
        
       

<Box sx={{marginRight:{lg:"100px",md:"68px",sm:"19px"}}}>
        <Box sx={{width:"38px",position: 'relative'}}>
          <a href="/login"  style={{color:"white"}}>
          <QrCodeScannerIcon sx={{fontSize:{lg:"38px",md:"38px",sm:"30px"}}}></QrCodeScannerIcon>
          <Box className="scan-line" sx={{width:{lg:"100%",md:"100%",sm:"80%",xs:"64%"}}}></Box>
          </a>
        </Box>
</Box>
      </Toolbar> 

    </AppBar>
  );
};

export default Navbar;







