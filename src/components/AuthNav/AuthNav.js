import { Box, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <Link
        component={NavLink}
        variant="text"
        to={'/register'}
        sx={{
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            color: '#ffffffbf',
          },
        }}
      >
        Register
      </Link>
      <Link
        component={NavLink}
        variant="text"
        to="/login"
        sx={{
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            color: '#ffffffbf',
          },
        }}
      >
        Log In
      </Link>
    </Box>
  );
};
