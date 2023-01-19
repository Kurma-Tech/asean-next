import { useFormik } from 'formik';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import login_validate from '../../lib/core/validation/authValidation';
import { gotToSignUp, loginSubmit } from '../../lib/features/auth/authActions';
import { LoginRequestType } from '../../lib/features/auth/authTypes';
import { RootState, store } from '../../lib/store/store';
import authStyles from '../layouts/authentication/AuthenticationLayout.module.css';

export interface ILoginComponent {
  children?: React.ReactNode;
}

const LoginComponent: React.FC<ILoginComponent> = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: login_validate,
    onSubmit,
  });
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const errorMessage = useSelector(
    (state: RootState) => state.auth.errorMessage
  );

  async function onSubmit(values: LoginRequestType) {
    store.dispatch(await loginSubmit(values));
  }
  return (
    <div className="w-3/5 mx-auto flex flex-col">
      <div className="flex flex-col pb-4">
        <h1 className="text-gray-800 text-4xl font-bold py-2">Sign In</h1>
        <p className="w-3/4 mx-auto text-gray-400">Login to your account.</p>
      </div>
      <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
        <div
          className={`${authStyles.input_group}  ${
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
          className={`${authStyles.input_group}  ${
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
        <div className="">
          <button
            type="submit"
            className={
              isLoggedIn ? authStyles.button_success : authStyles.button
            }
          >
            {isLoggedIn ? 'Login Success' : 'Login'}
          </button>
        </div>
        {errorMessage ? (
          <div className="text-sm text-rose-600 text-left">{errorMessage}</div>
        ) : (
          <></>
        )}
        <div className="">
          <button type="button" className={authStyles.button_custom}>
            Sign In with Google
            <Image
              src={'/assets/google.svg'}
              width="20"
              height={20}
              alt="google"
            ></Image>
          </button>
        </div>
        <p className="text-center text-gray-400">
          Don&apos;t have an account yet?{' '}
          <button
            className="text-black"
            type="button"
            onClick={() => {
              dispatch(gotToSignUp());
            }}
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginComponent;
