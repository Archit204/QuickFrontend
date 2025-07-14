import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import PhoneIcon from '@mui/icons-material/Phone';
import LoginIcon from '@mui/icons-material/Login';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import Navbar from './Navbar';
import logo from '../Component/logoofquickaid.png'

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box>
      <Box sx={{width:"100%",height:"55px",backgroundColor:"#1976d2"}}>
        <Box sx={{width:"80px",margin:"auto"}}>
        <img src={logo} alt="" width={"100%"}/>
        </Box>
      </Box>
    <Box sx={{ width: 250,padding:"50px 0px 0px 30px" }} role="presentation" onClick={toggleDrawer(false)}>
      <a href="/" className='menu' ><HomeIcon sx={{fontSize:"20px",verticalAlign:"middle"}}></HomeIcon> Home</a> <br />
      <a href="/about" className='menu'><GroupIcon sx={{fontSize:"20px",verticalAlign:"middle"}}></GroupIcon> About-Us</a> <br />
      <a href="/contact" className='menu'><PhoneIcon sx={{fontSize:"20px",verticalAlign:"middle"}}></PhoneIcon> Contact-Us</a> <br />
      <a href="/signup" className='menu'><LoginIcon sx={{fontSize:"20px",verticalAlign:"middle"}}></LoginIcon> Signup/Login</a> <br />
      <a href="/login" className='menu'><QrCodeScannerIcon></QrCodeScannerIcon> Generate QR</a> <br />
    </Box>
    </Box>
  );

  return (
    <Box sx={{display:{lg:"none",md:"none",sm:"none",xs:"block"}}}>
      <Button onClick={toggleDrawer(true)}><MenuIcon sx={{width:{lg:"0px",md:"0px",sm:"0px"},color:"white"}}></MenuIcon></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}