import * as yup from 'yup';
import { BrandDto } from '../api';
export const RegisterSchema = (brand: BrandDto) =>
  yup.object().shape({
    brand: yup.object().shape({
      brandCode: yup.string().default(brand?.brandCode),
      brandName: yup.string().required('Brand name is required').default(brand?.brandName),
      brandUrl: yup.string().required('Web URL is required').default(brand?.brandUrl),
      email: yup.string().email().required('Email is required').default(brand?.email),
      address: yup.string().required('Address is required').default(brand?.address),
      PhoneNo: yup.string().default(brand?.phoneNo),
    }),
    user: yup.object().shape({
      username: yup.string().required('Username is required'),
      password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
      brandId: yup.string().default(brand?.id),
    }),
  });
