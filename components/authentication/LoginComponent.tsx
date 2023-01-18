import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { gotToSignUp } from '../../lib/features/auth/authActions';
import authStyles from '../layouts/authentication/AuthenticationLayout.module.css';

export interface ILoginComponent {
  children?: React.ReactNode;
}

const LoginComponent: React.FC<ILoginComponent> = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-3/5 mx-auto flex flex-col">
      <div className="flex flex-col pb-4">
        <h1 className="text-gray-800 text-4xl font-bold py-2">Sign In</h1>
        <p className="w-3/4 mx-auto text-gray-400">Login to your account.</p>
      </div>
      <form className="flex flex-col gap-3">
        <div className={`${authStyles.input_group}`}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={authStyles.input_text}
          />
        </div>
        <div className={`${authStyles.input_group}`}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={authStyles.input_text}
          />
        </div>
        <div className="">
          <button type="submit" className={authStyles.button}>
            Login
          </button>
        </div>
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
