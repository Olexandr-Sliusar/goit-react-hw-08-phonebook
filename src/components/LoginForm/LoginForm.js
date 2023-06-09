import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Input,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& .MuiTextField-root': {
    margin: '10px',
    width: '300px',
  },
  '& .MuiFormControl-root': {
    margin: '10px',
    width: '300px',
  },
  '& .MuiButton-root': {
    margin: '20px',
  },
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <TextField label="Email" type="email" name="email" variant="standard" />
      <FormControl variant="standard">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button type="submit" variant="contained">
        Log In
      </Button>
    </StyledForm>
  );
};
