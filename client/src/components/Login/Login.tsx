import { Box } from '@mui/material'
import React from 'react';
import useModal from '@/hooks/modals';

const Login: React.FC = () => {
  const { modal } = useModal();
  console.log(modal)
  if(modal?.target !== "login" || modal.status !== "flex"){
    return null
  }
  return (
    <Box
      sx={{
        position:"absolute",
        top:'0',
        bottom:'0',
        right:'0',
        left:'0',
        width: '100vw',
        height: '100vh',
        background: "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6))",
        display: modal.status,
        justifyContent:'center',
        alignItems:'center',
        zIndex:'10',
        overflow:'hidden'
      }}  
    >
      Login
    </Box>
  )
}

export default Login