import { Field } from './Filter.styled';
import { Formik } from 'formik';
import { TextField } from 'formik-mui';
import { FormField } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/slice';

import SearchIcon from '@mui/icons-material/Search';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Formik
      initialValues={{
        name: '',
      }}
    >
      <FormField>
        <Field
          component={TextField}
          placeholder="Find contact by name"
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={changeFilter}
          value={filter}
          autoComplete="off"
          autoFocus
          InputProps={{
            startAdornment: (
              <SearchIcon
                position="start"
                style={{ color: '#74747455', marginRight: '10px' }}
              />
            ),
          }}
        >
          <SearchIcon position="start" style={{ color: '#747474' }} />
        </Field>
      </FormField>
    </Formik>
  );
};
