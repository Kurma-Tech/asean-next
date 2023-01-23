import { useDispatch, useSelector } from 'react-redux';
import {
  changeToDenstiy,
  changeToHeat,
} from '../../lib/features/mapChange/mapChangeSlice';
import { RootState } from '../../lib/store/store';

export interface IChangeMapComponent {
  children?: React.ReactNode;
}

const ChangeMapComponent: React.FC<IChangeMapComponent> = () => {
  const isDensity: boolean = useSelector(
    (state: RootState) => state.mapChange.isDensity
  );
  const dispatch = useDispatch();
  return (
    <div className="absolute top-0 right-full mr-2 bg-white max-w-[240px] min-w-[180px] px-2 py-2 rounded-md overflow-hidden flex flex-col gap-2">
      <button
        className={`${!isDensity ? 'text-black' : 'text-white'} ${
          !isDensity ? 'hover:bg-gray-200' : 'hover:bg-gray-800'
        } w-full text-sm font-medium py-2 px-2 text-left ${
          !isDensity ? 'bg-gray-100' : 'bg-black'
        }  rounded-md`}
        onClick={() => {
          if (!isDensity) {
            dispatch(changeToDenstiy());
          }
        }}
      >
        Density Map
      </button>
      <button
        className={`${isDensity ? 'text-black' : 'text-white'} ${
          isDensity ? 'hover:bg-gray-200' : 'hover:bg-gray-800'
        } w-full text-sm font-medium py-2 px-2 text-left ${
          isDensity ? 'bg-gray-100' : 'bg-black'
        }  rounded-md`}
        onClick={() => {
          if (isDensity) {
            dispatch(changeToHeat());
          }
        }}
      >
        Heat Map
      </button>
    </div>
  );
};

export default ChangeMapComponent;
