import { Box, CssBaseline, Typography } from '@mui/material';
import React from 'react';
const Hero: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          textAlign:'center',
          padding:'5rem 0'
        }}
      >
        <Typography 
          variant='h2' 
          component='h2'
          color='white'
          sx={{
            textAlign:'center',
            fontWeight:'700',
            fontSize:'3.5rem'
          }}
        >
          Connect instantly with anyone, anywhere
        </Typography>
        <Typography 
          variant='body1' 
          component='p'
          sx={{
            textAlign:'center',
            color:'#ddd'
          }}
        >
          Our chat app offers real-time messaging, seamless communication, and a user-friendly experience. Start chatting today and stay connected with your world.
        </Typography>
      </Box>
    </>
  )
}

export default Hero