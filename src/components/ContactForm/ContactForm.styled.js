import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  width: 300px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
