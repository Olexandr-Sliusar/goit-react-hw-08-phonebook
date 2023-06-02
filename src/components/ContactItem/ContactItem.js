import { useDispatch } from 'react-redux';
import { Item, Phone } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ contactItem }) => {
  const dispatch = useDispatch();
  const { id, name, phone } = contactItem;

  return (
    <Item>
      {name}: <Phone>{phone}</Phone>
      <button onClick={() => dispatch(deleteContact(id))} aria-label="Delete">
        Delete
      </button>
    </Item>
  );
};

ContactItem.propTypes = {
  contactItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
