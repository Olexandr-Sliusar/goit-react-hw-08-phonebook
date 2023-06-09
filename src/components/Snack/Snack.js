import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Snack = ({ params }) => {
  const { isOpen, onClose, text } = params;

  return (
    <Snackbar open={isOpen} autoHideDuration={5000} onClose={onClose}>
      <Alert severity="success">{text}</Alert>
    </Snackbar>
  );
};
