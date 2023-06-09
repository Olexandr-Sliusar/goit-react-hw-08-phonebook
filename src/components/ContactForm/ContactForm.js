import { Form, FormField } from './ContactForm.styled';
import { TextField } from 'formik-mui';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Button } from '@mui/material';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short, minimal length 2!')
    .max(50, 'Too long, maximul length 50!')
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Not valid! Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Not valid! Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(7, 'Too short, minimal length 7!')
    .required('Required'),
});
export const ContactForm = ({ onClose, showSnake }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        const isAlreadyExist = contacts.find(
          ({ name }) => name.toLowerCase() === values.name.toLowerCase()
        );
        if (isAlreadyExist) {
          alert(`${values.name} is already in contacts`);
          return;
        }
        dispatch(addContact(values));
        actions.resetForm();
        showSnake('Contact successfully added');
        onClose();
      }}
    >
      <Form>
        <FormField>
          <Field
            component={TextField}
            variant="standard"
            label="Name"
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </FormField>
        <FormField>
          <Field
            component={TextField}
            variant="standard"
            label="Number"
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
        </FormField>
        <Button
          variant="contained"
          type="submit"
          aria-label="Add contact"
          sx={{ marginTop: '20px' }}
        >
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};
