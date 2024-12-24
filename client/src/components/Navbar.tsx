import React from 'react'
import { Box, Typography } from '@mui/material';
import RegisterBTN from './RegisterBTN';
import useModal from '@/hooks/modals';

const Navbar: React.FC = () => {
    const { setModal } = useModal();
  return (
    <Box
        sx={{
            width:'100%',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            padding:'2rem',
            boxShadow: '0 10px 14px rgba(0, 0, 0, 0.2)',
        }} 
    >
        <RegisterBTN
            func={() => setModal({ target: "register", status: "flex" })}
        >
            Register
        </RegisterBTN>
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
                color='text.primary'>
                -CHAT
            </Typography>
        </Typography>
        <RegisterBTN
            func={() => setModal({ target: "login", status: "flex" })}
        >
            Login
        </RegisterBTN>
    </Box>
  )
}

export default Navbar