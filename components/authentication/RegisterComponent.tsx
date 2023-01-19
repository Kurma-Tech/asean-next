import { useFormik } from 'formik';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { registerValidate } from '../../lib/core/validation/authValidation';
import {
  goToSignIn,
  registerSubmit,
} from '../../lib/features/auth/authActions';
import { RegisterRequestType } from '../../lib/features/auth/authTypes';
import { RootState, store } from '../../lib/store/store';
import authStyles from '../layouts/authentication/AuthenticationLayout.module.css';

export interface IRegisterComponent {
  children?: React.ReactNode;
}

const RegisterComponent: React.FC<IRegisterComponent> = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const errorMessage = useSelector(
    (state: RootState) => state.auth.errorMessage
  );
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    validate: registerValidate,
    onSubmit,
  });

  async function onSubmit(values: RegisterRequestType) {
    store.dispatch(await registerSubmit(values));
  }
  return (
    <div className="w-3/5 mx-auto flex flex-col">
      <div className="flex flex-col pb-4">
        <h1 className="text-gray-800 text-4xl font-bold py-2">Sign Up</h1>
        <p className="w-3/4 mx-auto text-gray-400">Create a new account.</p>
      </div>
      <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
        <div
          className={`${authStyles.input_group} ${
            formik.errors.name && formik.touched.name ? 'border-rose-600' : ''
          }`}
        >
          <input
            type="text"
            placeholder="Name"
            className={authStyles.input_text}
            {...formik.getFieldProps('name')}
          />
        </div>
        {formik.errors.name && formik.touched.name ? (
          <div className="text-sm text-rose-600 text-left">
            {formik.errors.name}
          </div>
        ) : (
          <></>
        )}
        <div
          className={`${authStyles.input_group} ${
            formik.errors.email && formik.touched.email ? 'border-rose-600' : ''
          }`}
        >
          <input
            type="email"
            placeholder="Email"
            className={authStyles.input_text}
            {...formik.getFieldProps('email')}
          />
        </div>
        {formik.errors.email && formik.touched.email ? (
          <div className="text-sm text-rose-600 text-left">
            {formik.errors.email}
          </div>
        ) : (
          <></>
        )}
        <div
          className={`${authStyles.input_group} ${
            formik.errors.password && formik.touched.password
              ? 'border-rose-600'
              : ''
          }`}
        >
          <input
            type="password"
            placeholder="Password"
            className={authStyles.input_text}
            {...formik.getFieldProps('password')}
          />
        </div>
        {formik.errors.password && formik.touched.password ? (
          <div className="text-sm text-rose-600 text-left">
            {formik.errors.password}
          </div>
        ) : (
          <></>
        )}
        <div
          className={`${authStyles.input_group} ${
            formik.errors.password_confirmation &&
            formik.touched.password_confirmation
              ? 'border-rose-600'
              : ''
          }`}
        >
          <input
            type="password"
            placeholder="Confirm Password"
            className={authStyles.input_text}
            {...formik.getFieldProps('password_confirmation')}
          />
        </div>
        {formik.errors.password_confirmation &&
        formik.touched.password_confirmation ? (
          <div className="text-sm text-rose-600 text-left">
            {formik.errors.password_confirmation}
          </div>
        ) : (
          <></>
        )}
        {errorMessage ? (
          <div className="text-sm text-rose-600 text-left">{errorMessage}</div>
        ) : (
          <></>
        )}
        <div className="">
          <button
            type="submit"
            className={
              isLoggedIn ? authStyles.button_success : authStyles.button
            }
          >
            {isLoggedIn ? 'Registered' : 'Register'}
          </button>
        </div>
        <div className="">
          <button type="button" className={authStyles.button_custom}>
            Sign Up with Google
            <Image
              src={'/assets/google.svg'}
              width="20"
              height={20}
              alt="google"
            ></Image>
          </button>
        </div>
        <p className="text-center text-gray-400">
          Already have an account yet?{' '}
          <button
            className="text-black"
            type="button"
            onClick={() => {
              dispatch(goToSignIn());
            }}
          >
            Sign in
          </button>
        </p>
      </form>
    </div>
  );
};

export default RegisterComponent;
