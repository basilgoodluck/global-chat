import { Container } from '@mui/material';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Footer = React.lazy(() => import('@/components/Footer'));

const MainLayout: React.FC = () => {
  return (
    <Container>
      <Outlet />
      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </Container>
  );
};

export default MainLayout;
