import { NavBar } from 'components/NavBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export const Layout = () => {
  return (
    <Box
      margin="0 auto"
      sx={{
        minHeight: '100vh',
      }}
    >
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
