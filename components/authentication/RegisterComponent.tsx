import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { goToSignIn } from '../../lib/features/auth/authActions';
import authStyles from '../layouts/authentication/AuthenticationLayout.module.css';

export interface IRegisterComponent {
  children?: React.ReactNode;
}

const RegisterComponent: React.FC<IRegisterComponent> = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-3/5 mx-auto flex flex-col">
      <div className="flex flex-col pb-4">
        <h1 className="text-gray-800 text-4xl font-bold py-2">Sign Up</h1>
        <p className="w-3/4 mx-auto text-gray-400">Create a new account.</p>
      </div>
      <form className="flex flex-col gap-3">
        <div className={`${authStyles.input_group}`}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={authStyles.input_text}
          />
        </div>
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
        <div className={`${authStyles.input_group}`}>
          <input
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            className={authStyles.input_text}
          />
        </div>
        <div className="">
          <button type="submit" className={authStyles.button}>
            Register
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
