import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { useState } from 'react';
import { ModalContact } from 'components/ModalContact/ModalContact';
import EditNoteIcon from '@mui/icons-material/EditNote';

import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  styled,
} from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import DeleteIcon from '@mui/icons-material/Delete';
import { theme } from 'components/theme';

const StiledListItem = styled(ListItem)({
  padding: '4px 12px',
  borderBottom: '2px dotted #bdbdbd55',
  '&:hover': {
    borderBottom: '2px solid ' + theme.palette.primary.main,
    backgroundColor: `${theme.palette.primary.main}11`,
  },
});

export const ContactItem = ({ contactItem, showSnake }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(state => !state);

  const dispatch = useDispatch();
  const { id, name, number } = contactItem;

  return (
    <>
      <StiledListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonSearchIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={number} />
        <Box>
          <Tooltip title="Edit contact">
            <IconButton
              edge="end"
              aria-label="edit"
              type="button"
              onClick={toggleModal}
              sx={{
                mr: 1,
              }}
            >
              <EditNoteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete contact">
            <IconButton
              edge="end"
              aria-label="delete"
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
                showSnake('contact successfully deleted');
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </StiledListItem>
      {openModal && (
        <ModalContact
          onClose={toggleModal}
          edit={true}
          values={contactItem}
          showSnake={showSnake}
        />
      )}
    </>
  );
};

ContactItem.propTypes = {
  contactItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
