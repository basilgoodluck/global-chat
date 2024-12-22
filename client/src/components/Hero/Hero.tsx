import { Box, Typography } from '@mui/material';
import React from 'react';
import AnimatedCard from '../Animations/AnimatedCard';
import chess from '@/assets/chess.png';
import science from '@/assets/science.png';
import music from '@/assets/music.png';
import sen from '@/assets/sen.png';
import crypto from '@/assets/crypto.png';
import sport from '@/assets/sport.png';

const images = [chess, science, music, sen, crypto, sport]
const Hero: React.FC = () => {
  return (
    <Box 
      sx={{
        maxWidth:"100vw",
      }}
      >
      <Box>
        <Typography 
          variant='h1' 
          component='h1' 
          textAlign='center'
          sx={{
            color:'text.title',
            padding:'1rem'
          }}
        >
          GLOBAL
          <Typography 
            component='span' 
            variant='h1' 
            color='secondary.main'>
            -CHAT
          </Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign:'center',
          padding:'2rem',
          display:'grid',
          gridTemplateColumns:'repeat(3, 1fr)',
        }}
      >    
        {
          images.map((e)=>(
            <AnimatedCard
              imageSrc={e} 
            >
            </AnimatedCard>
          ))
        }
      </Box>
    </Box>
  )
}

export default Hero