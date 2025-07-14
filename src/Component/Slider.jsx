import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'
import apollo from './apollo.png'
import aiims from './aiims.webp'
import apple from './apple.png'
import max from './max.png'
import saikiran from './saikiran.png'
import spring from './spring.png'
import hill from './hill.png'
import hudson from './hudson.avif'
// import apollo from './apollo.png'
import { Box } from "@mui/material";
import { Margin } from "@mui/icons-material";

function AutoPlay() {
  const settings = {
    width:200,
    // dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 20,
    cssEase: "linear",
      arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      
          <Box sx={{width:"150px"}}>
          <img src={apollo} width={"100%"} alt="" />
          </Box>

          <Box sx={{width:"200px"}}>
          <img src={aiims} width={"100%"} alt="" />
          </Box>
          
          <Box sx={{width:"200px"}}>
          <img src={max} width={"100%"} alt="" />
          </Box>
          
          <Box sx={{width:"200px"}}>
          <img src={saikiran} width={"100%"} alt="" />
          </Box>
          
          <Box sx={{width:"200px"}}>
          <img src={apple} width={"80%"} style={{padding:"10px",backgroundSize:"cover"}} alt="" />
          </Box>
          
          <Box sx={{width:"200px"}}>
          <img src={spring} width={"100%"} alt="" />
          </Box>
          
          <Box sx={{width:"200px"}}>
          <img src={hill} width={"100%"} alt="" />
          </Box>

          
          <Box sx={{width:"200px"}}>
          <img src={hudson} width={"100%"} alt="" />
          </Box>
      </Slider>
    </div>
  );
}

export default AutoPlay;
