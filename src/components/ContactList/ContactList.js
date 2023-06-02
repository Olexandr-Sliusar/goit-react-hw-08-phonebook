import { List } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterText = useSelector(selectFilter);

  const getFlteredContacts = () => {
    const normalizedFilter = filterText.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  if (getFlteredContacts().length === 0) {
    return <p> There is no contacts</p>;
  }

  return (
    <List>
      {getFlteredContacts().map(contactItem => (
        <ContactItem key={contactItem.id} contactItem={contactItem} />
      ))}
    </List>
  );
};
