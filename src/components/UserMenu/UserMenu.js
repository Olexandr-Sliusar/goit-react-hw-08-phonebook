import { Logout } from '@mui/icons-material';
import { Avatar, Box, Button, Chip } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { theme } from 'components/theme';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(selectUser);
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
      <Chip
        avatar={
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
            }}
            alt={name}
            src="/default-image.jpg"
            style={{ color: 'white' }}
          />
        }
        label={
          <>
            {name} <br />
            <span style={{ color: '#ccc', fontSize: 10 + 'px' }}>{email}</span>
          </>
        }
        variant="outlined"
        sx={{
          color: '#ffffff',
          borderColor: '#ffffff',
          p: ' 5px 0',
          height: 'auto',
          '& .MuiChip-label': {
            display: 'block',
            whiteSpace: 'normal',
          },
          '& .MuiChip-avatar': {
            width: 36,
            height: 36,
            fontSize: '1.25rem',
          },
        }}
      />
      <Button
        variant="contained"
        startIcon={<Logout />}
        onClick={() => dispatch(logOut())}
        color="primary"
        sx={{
          bgcolor: theme.palette.secondary.main,
          '&:hover': {
            bgcolor: theme.palette.secondary.dark,
          },
          ml: theme.spacing(4),
        }}
      >
        Exit
      </Button>
    </Box>
  );
};
