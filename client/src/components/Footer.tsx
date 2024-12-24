import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.default',
        color: 'text.secondary',
        padding: 2,
        textAlign: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 4,
      }}
    >
      <Typography 
        variant="body2"
        sx={{
          textAlign:'center'
        }}
      >
        © {new Date().getFullYear()} Basil Goodluck. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
