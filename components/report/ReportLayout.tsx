import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearReportNew,
  hideReport,
} from '../../lib/features/report/reportSlice';
import { RootState } from '../../lib/store/store';
import EmergingCategoryTable from './EmergingCategoryTable';
import ForecastChart from './ForecastChart';
import PopularCategoryTable from './PopularCategoryTable';
import TotalDataChart from './TotalDataChart';

export interface IReportLayout {
  children?: React.ReactNode;
}

const ReportLayout: React.FC<IReportLayout> = () => {
  const dispatch = useDispatch();
  const isReportVisible: boolean = useSelector(
    (state: RootState) => state.report.isReportVisible
  );
  useEffect(() => {
    if (isReportVisible) {
      dispatch(clearReportNew());
    }
  });
  return (
    <div className="w-1/2 max-w-full max-h-[calc(100%-2rem)] h-min bg-white/[.7] backdrop-blur-[4px] box-border rounded-[12px] pointer-events-auto overflow-auto">
      <div className="w-full">
        <div className="border-b-[1px] py-[8px] px-[24px] border-b-white sticky top-0 backdrop-blur-[14px] z-10 flex justify-between items-center">
          <h4 className="text-[18px] font-semibold text-[#333] m-0 leading-[24px]">
            Reports
          </h4>
          <button
            className="px-2 py-2 rounded-md bg-black"
            onClick={() => {
              dispatch(hideReport());
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <div className="p-[18px]">
          <PopularCategoryTable />
          <TotalDataChart />
          <ForecastChart />
          <EmergingCategoryTable />
        </div>
      </div>
    </div>
  );
};

export default ReportLayout;
