import { useDispatch, useSelector } from 'react-redux';
import {
  hideUserSettingsLayout,
  showAuthLayout,
  showUserSettingsLayout,
} from '../../lib/features/auth/authActions';
import { RootState } from '../../lib/store/store';
import UserSettingsComponent from '../user/UserSettingsComponent';
import styles from './ActionBarLayout.module.css';

export interface IActionBarLayout {
  children?: React.ReactNode;
}

const ActionBarLayout: React.FC<IActionBarLayout> = () => {
  const dispatch = useDispatch();
  const isUserSettingsShown = useSelector(
    (state: RootState) => state.auth.isUserSettingsShown
  );
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <div className="pointer-events-auto flex flex-col gap-2">
      <div className="relative">
        <button
          className={styles.action_button}
          type="button"
          onClick={() => {
            if (!isLoggedIn) {
              dispatch(showAuthLayout());
              return;
            }
            if (isUserSettingsShown) {
              dispatch(hideUserSettingsLayout());
            } else {
              dispatch(showUserSettingsLayout());
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isUserSettingsShown ? <UserSettingsComponent /> : <></>}
      </div>
      <div className="relative">
        <button
          className={styles.action_button}
          type="button"
          onClick={() => {}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {/* <ChangeLanguageComponent /> */}
      </div>
    </div>
  );
};

export default ActionBarLayout;
