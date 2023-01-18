import { useDispatch, useSelector } from 'react-redux';
import { hideAuthLayout } from '../../../lib/features/auth/authActions';
import { RootState } from '../../../lib/store/store';
import LoginComponent from '../../authentication/LoginComponent';
import RegisterComponent from '../../authentication/RegisterComponent';
import styles from './AuthenticationLayout.module.css';

export interface IAuthenticationLayout {
  children?: React.ReactNode;
}

const AuthenticationLayout: React.FC<IAuthenticationLayout> = () => {
  const isSignInForm: boolean = useSelector(
    (state: RootState) => state.auth.isSignInForm
  );
  const dispatch = useDispatch();
  return (
    <div className="absolute h-screen w-screen backdrop-blur-sm bg-white/[.1] flex mx-auto gap-10">
      <div className="relative m-auto bg-slate-50 rounded-xl w-3/5 h-3/4 grid lg:grid-cols-2">
        <div className={styles.imgStyle}>
          <h1 className="text-3xl font-semibold text-white m-0 leading-[24px] mt-10">
            Welcome!
          </h1>
          <p className="text-sm font-semibold text-white">Asean</p>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-center py-10">
            {isSignInForm ? <LoginComponent /> : <RegisterComponent />}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <button
            className="bg-black rounded-md p-1"
            onClick={() => {
              dispatch(hideAuthLayout());
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationLayout;
