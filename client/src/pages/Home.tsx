import About from '@/components/About/About';
import Hero from '@/components/Hero/Hero';
import { Login } from '@/components/Login';
import { Register } from '@/components/Register';
import { Box } from '@mui/material';
import React from 'react';

const Home: React.FC = () => {
  return (
    <Box 
    sx={{
      width:'100vw',
      padding:'2rem',
      position:'relative'
    }}
    >
      <Register />
      <Login />
      <Hero />
      <About />
    </Box>
  )
}

export default Home