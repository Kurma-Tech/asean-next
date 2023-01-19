import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../lib/features/auth/authActions';
import { RootState } from '../../lib/store/store';

export interface IUserSettingsComponent {
  children?: React.ReactNode;
}

const UserSettingsComponent: React.FC<IUserSettingsComponent> = () => {
  const name: boolean = useSelector((state: RootState) => state.auth.name);
  const email: boolean = useSelector((state: RootState) => state.auth.email);
  const dispatch = useDispatch();
  return (
    <div className="absolute top-0 right-full mr-2 bg-white max-w-[240px] min-w-[180px] px-2 py-2 rounded-md overflow-hidden">
      <h2 className="font-bold text-base text-gray-700">{name}</h2>
      <p className="font-normal text-sm text-ellipsis text-gray-400 mb-2">
        {email}
      </p>
      <button
        className="w-full text-sm font-medium py-2 px-2 text-left text-rose-600 bg-gray-100 hover:bg-gray-200 rounded-md"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default UserSettingsComponent;
