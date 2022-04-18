import * as yup from 'yup';
export const LoginSchema = yup.object().shape({
  username: yup.string().email().required('Username is required'),
  password: yup.string().required('Password is required'),
});
