import React from "react";
import { Box } from "@mui/material";
import FeaturedChat from "../CardComponents/FeaturedChat";

const AnimatedCardGrid: React.FC = () => {
  return (
    <Box
      sx={{
        width:'80%',
        margin:'0 auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        gap:'3rem'
      }}
    >
      <FeaturedChat
        defaultText="Software Engineering"
        text="Explore amazing features!"
        bgColor="#3455eb"
      />
      <FeaturedChat
        defaultText="Games"
        text="Discover more possibilities!"
        bgColor="#a035e3"
      />
      <FeaturedChat
        defaultText="Music"
        text="Stay connected and informed!"
        bgColor="#91eb2a"
      />      
    </Box>
  );
};

export default AnimatedCardGrid;
