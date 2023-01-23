import { useDispatch, useSelector } from 'react-redux';
import {
  hideUserSettingsLayout,
  showAuthLayout,
  showUserSettingsLayout,
} from '../../lib/features/auth/authActions';
import {
  closeMapSettings,
  openMapSettings,
} from '../../lib/features/mapChange/mapChangeSlice';
import { RootState } from '../../lib/store/store';
import ChangeMapComponent from '../user/ChangeLanguageComponent';
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
  const isMapSettingShown = useSelector(
    (state: RootState) => state.mapChange.isMapSettingShown
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
          onClick={() => {
            if (isMapSettingShown) {
              dispatch(closeMapSettings());
            } else {
              dispatch(openMapSettings());
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
              d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isMapSettingShown ? <ChangeMapComponent /> : <></>}
      </div>
    </div>
  );
};

export default ActionBarLayout;
