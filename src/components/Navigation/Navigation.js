import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box component="nav" sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <Button
        component={NavLink}
        to="/"
        sx={{
          textTransform: 'none',
          fontSize: '20px',
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            color: 'inherit',
          },
        }}
      >
        Phonebook
      </Button>

      {isLoggedIn && (
        <Button
          component={NavLink}
          to="/contacts"
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            '&:hover': {
              color: '#ffffffbf',
            },
          }}
        >
          Contacts
        </Button>
      )}
    </Box>
  );
};
