import React, { useRef } from "react";
import { Card, CardMedia, Box, Typography } from "@mui/material";

const AnimatedCard: React.FC<{ imageSrc: string }> = ({ imageSrc }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2; 
      const y = event.clientY - rect.top - rect.height / 2; 
      cardRef.current.style.transform = `perspective(1000px) rotateX(${-y / 5}deg) rotateY(${x / 5}deg)`; 
    }
  };  

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: 'relative',
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        transition: "transform 0.2s ease", 
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        src={imageSrc}
        alt="Cool Animation"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box 
        sx={{
            position:'absolute',
            
        }}
      >
        <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni vel earum ullam non nemo. Minus unde vero quo ipsum.
        </Typography>
      </Box>
    </Card>
  );
};

export default AnimatedCard;
