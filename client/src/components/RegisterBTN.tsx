import React from 'react';
import { Box, Typography } from '@mui/material';

interface RegisterBTNProps {
  children: React.ReactNode;
  func: () => void; 
}

const RegisterBTN: React.FC<RegisterBTNProps> = ({ children, func }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        color: 'text.secondary',
        width: '200px',
        height: '100px',
        backgroundColor: 'background.paper',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxShadow: '0 8px 14px rgba(0, 0, 0, 0.2)',
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        cursor: 'pointer', 
      }}
      onClick={func} 
    >
      <Typography
        variant='h1'
        sx={{
          fontWeight: 'bold',
          fontSize: '2rem',
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default RegisterBTN;
