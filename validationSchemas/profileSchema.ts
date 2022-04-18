import * as yup from 'yup';
export const ProfileSchema = (user: any) =>
  yup.object().shape({
      firstName: yup.string().default(user?.firstName).required("First name is required"),
      lastName: yup.string().default(user?.lastName).required("Last name is required"),
      password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
  });
