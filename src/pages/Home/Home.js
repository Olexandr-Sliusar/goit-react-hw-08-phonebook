import { Box, Typography } from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

export const Home = () => {
  return (
    <Box align="center" pt={5}>
      <ImportContactsIcon color="secondary" sx={{ fontSize: 100 }} />
      <Typography variant="overline" component="h1" sx={{ fontSize: 30 }}>
        Welcome to phonebook!
      </Typography>
    </Box>
  );
};
