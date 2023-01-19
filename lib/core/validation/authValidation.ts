import {
  LoginRequestType,
  RegisterRequestType,
} from '../../features/auth/authTypes';

export default function login_validate(values: LoginRequestType) {
  const errors = {} as LoginRequestType;

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // validation for password
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Must be greater then 8 and less then 20 characters long';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid Password';
  }

  return errors;
}

export function registerValidate(values: RegisterRequestType) {
  const errors = {} as RegisterRequestType;

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // validation for password
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Must be greater then 8 and less then 20 characters long';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid Password';
  }

  // validate confirm password
  if (!values.password_confirmation) {
    errors.password_confirmation = 'Required';
  } else if (values.password !== values.password_confirmation) {
    errors.password_confirmation = 'Password Not Match...!';
  } else if (values.password_confirmation.includes(' ')) {
    errors.password_confirmation = 'Invalid Confirm Password';
  }

  return errors;
}
