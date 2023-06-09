import { List } from '@mui/material';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';

export const ContactList = ({ showSnake }) => {
  const contacts = useSelector(selectContacts);
  const filterText = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  const getFlteredContacts = () => {
    const normalizedFilter = filterText.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  if (getFlteredContacts().length === 0 && !isLoading) {
    return <p> There is no contacts</p>;
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {getFlteredContacts().map(contactItem => (
        <ContactItem
          key={contactItem.id}
          contactItem={contactItem}
          showSnake={showSnake}
        />
      ))}
    </List>
  );
};
