import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { Button } from '@mui/material';

import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { Form, FormField } from './EditForm.styled';
import { TextField } from 'formik-mui';

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

export const EditForm = ({ onClose, valuesContact, showSnake }) => {
  const dispatch = useDispatch();
  const { id, name, number } = valuesContact;

  return (
    <Formik
      initialValues={{
        name: name,
        number: number,
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        dispatch(editContact({ id: id, ...values }));
        actions.resetForm();
        showSnake('Contact successfully updated');
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
          aria-label="Update contact"
          sx={{ marginTop: '20px' }}
        >
          Update contact
        </Button>
      </Form>
    </Formik>
  );
};
