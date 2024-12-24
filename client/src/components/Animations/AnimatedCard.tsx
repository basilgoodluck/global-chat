import React, { useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

interface AnimatedCardProps {
  text: string;
  backgroundColor: string;
  defaultText: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ text, backgroundColor, defaultText }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState<number>(100);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      cardRef.current.style.transform = `perspective(1000px) rotateX(${-y / 5}deg) rotateY(${x / 5}deg)`;
      setPos(-100);
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      setPos(100);
    }
  };

  return (
    <Box
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor,
        width: "300px",
        height: "200px",
        borderRadius: "8px",
        transition: "transform 0.2s ease",
        cursor: "pointer",
      }}
    >
      <Typography 
        variant="h4"
        component="h1"
        sx={{
          textAlign:"center",
        }}
      >
        {defaultText}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:'column',
          position: "absolute",
          width: "100%",
          background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
          height: `100%`,
          translate:`0 -${pos}%`,
          bottom: "0",
          left: "0",
          transition: "translate 0.4s ease",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "white",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          {text}
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "white",
            },
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default AnimatedCard;
