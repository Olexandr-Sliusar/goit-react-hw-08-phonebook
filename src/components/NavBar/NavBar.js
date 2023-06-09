import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { AppBar, Toolbar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'inherit',
});
export const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBar position="static" color="primary">
      <StyledToolbar>
        <Box
          sx={{
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};
