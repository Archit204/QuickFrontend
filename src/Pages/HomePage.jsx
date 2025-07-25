import React from 'react';

import Home from '../Component/Home'
import Howitwork from '../Component/Howitwork'
import Feature from '../Component/Feature'
import Box from '@mui/material/Box';
import Navbar from '../Component/Navbar';
import WhyChooseUs from '../Component/Whychooseus';
import TestimonialsSection from '../Component/Testimonial';
import FeaturesSection from '../Component/Featuresection'
import TrustedBy from '../Component/Trustedby';
import Footer from '../Component/Footer';
import Slider from '../Component/Slider';
import NotesSection from '../Component/Notes';

// {lg:"",md:"",sm:""}

const HomePage = () => {
  return (
  <Box>
    <Navbar></Navbar>
    <Home></Home>
    <Feature></Feature>
    <WhyChooseUs/>
    <Howitwork/>
    <FeaturesSection/>
    <TestimonialsSection/>
    <Slider></Slider>
    <NotesSection></NotesSection>
    <Footer></Footer>
   


    
  </Box>
  );
};

export default HomePage; 







