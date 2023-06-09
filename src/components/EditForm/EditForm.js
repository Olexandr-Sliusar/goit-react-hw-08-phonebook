// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useState } from 'react';
// import { FormField } from 'components/ContactForm/ContactForm.styled';

const StyledForm = styled('form')({
  display: 'flex',
  alignItems: 'stretch',
  flexDirection: 'column',
  justifyContent: 'center',
  // alignItems: 'center',
  '& .MuiTextField-root': {
    margin: '10px 0',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  '& .MuiButton-root': {
    marginTop: '20px',
  },
});

export const EditForm = ({ onClose, values, showSnake }) => {
  const { id } = values;
  const [name, setName] = useState(values.name);
  const [number, setNumber] = useState(values.number);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    const contact = { id, name, number };
    const notDuplicationName = contacts.find(
      contact => contact.name === name && contact.number === number
    );
    notDuplicationName !== undefined
      ? alert(`"${name}" and "${number}" is already in contacts.`)
      : dispatch(editContact(contact));
    event.currentTarget.reset();
    showSnake('contact successfully updated');
    onClose();
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        variant="standard"
        label="Name"
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <TextField
        variant="standard"
        label="Number"
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" aria-label="edit contact">
        Edit contact
      </Button>
    </StyledForm>
  );
};
