import styled from 'styled-components';
import { Field as FormikField } from 'formik';

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  align-items: 'flex-end';
`;

export const Field = styled(FormikField)`
  &svg {
    margin-right: 100px;
  }
`;
