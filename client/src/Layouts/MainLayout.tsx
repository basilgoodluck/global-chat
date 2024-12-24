import Navbar from '@/components/Navbar';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

const Footer = React.lazy(() => import('@/components/Footer'));

const MainLayout: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Suspense fallback={<div>Loading footer...</div>}>
        <Navbar />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};

export default MainLayout;
