import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ModalContact } from 'components/ModalContact/ModalContact';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import { Box, Fab, Tooltip } from '@mui/material';
import { Snack } from 'components/Snack/Snack';
import AddIcon from '@mui/icons-material/Add';
import { theme } from 'components/theme';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [openModal, setOpenModal] = useState(false);
  const [isSnakeOpen, setIsSnakeOpen] = useState(false);
  const [snakeMsg, setSnakeMsg] = useState('');

  const showSnake = text => {
    setIsSnakeOpen(true);
    setSnakeMsg(text);
  };

  const toggleModal = () => setOpenModal(state => !state);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {' '}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <Tooltip title="Add contact">
          <Fab
            size="medium"
            color="secondary"
            onClick={toggleModal}
            aria-label="add contact"
          >
            <AddIcon
              sx={{
                color: theme.palette.primary.contrastText,
              }}
            />
          </Fab>
        </Tooltip>

        <Filter />
      </Box>
      <>{isLoading && !error && <>Loading...</>}</>
      <ContactList showSnake={showSnake} />
      {openModal && (
        <ModalContact onClose={toggleModal} showSnake={showSnake} />
      )}
      <Snack
        params={{
          isOpen: isSnakeOpen,
          onClose: () => setIsSnakeOpen(false),
          text: snakeMsg,
        }}
      />
    </Box>
  );
}
