import {} from './Filter.styled';
import { Formik, Field } from 'formik';
import { FormField } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  return (
    <Formik
      initialValues={{
        name: '',
      }}
    >
      <FormField>
        Find contact by name
        <Field
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={changeFilter}
          value={filter}
        />
      </FormField>
    </Formik>
  );
};
