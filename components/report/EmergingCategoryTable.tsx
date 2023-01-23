import { useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  clearEmergingData,
  getEmergingCategoryDataAction,
} from '../../lib/features/emergingCategory/emergingCategoryAction';
import { ResponseEmergingCategoryType } from '../../lib/features/emergingCategory/emergingCategoryType';
import { RootState } from '../../lib/store/store';

export interface IEmergingCategoryTable {
  children?: React.ReactNode;
}

const EmergingCategoryTable: React.FC<IEmergingCategoryTable> = () => {
  const dispatch = useDispatch();
  const dataType: string = useSelector(
    (state: RootState) => state.filterValues.dataType
  );
  const country: number = useSelector(
    (state: RootState) => state.filterValues.country
  );
  const year: string = useSelector(
    (state: RootState) => state.filterValues.year
  );
  const categories: ResponseEmergingCategoryType[] = useSelector(
    (state: RootState) => state.emergingCategory.categories,
    shallowEqual
  );
  const removeRequest = useSelector(
    (state: RootState) => state.mapData.removeRequest
  );
  const isReportNew: boolean = useSelector(
    (state: RootState) => state.report.isReportNew
  );

  const getData = useCallback(async () => {
    dispatch(
      await getEmergingCategoryDataAction({
        dataType: dataType,
        country: country,
        year: year,
      })
    );
  }, [dispatch, dataType, country, year]);

  useEffect(() => {
    if (removeRequest || isReportNew) {
      dispatch(clearEmergingData());
      getData();
    }
  }, [getData, dispatch, isReportNew, removeRequest]);
  return (
    <div className="bg-white rounded-[12px] h-[320px] overflow-auto border-4 border-white box-border mt-3">
      <table className="table-auto items-center w-full">
        <thead className="sticky bg-white top-0">
          <tr>
            <th className="px-3 py-2 text-xs uppercase font-semibold text-left whitespace-nowrap">
              Emerging {dataType}
            </th>
            <th></th>
            <th className="px-3 py-2 flex justify-end items-center">
              <div className="flex text-[12px] items-center whitespace-nowrap">
                Filtered By:
                <div className="text-[10px] bg-gray-200 uppercase px-1 rounded-sm h-min ml-1">
                  Country
                </div>
                <div className="text-[10px] bg-gray-200 uppercase px-1 rounded-sm h-min mx-1">
                  Young
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th className="px-6 py-3 text-xs uppercase font-semibold text-left whitespace-nowrap">
              S.N
            </th>
            <th className="px-6 py-3 text-xs uppercase font-semibold text-left whitespace-nowrap">
              {dataType} Classification
            </th>
            <th className="px-6 py-3 text-xs uppercase font-semibold text-left whitespace-nowrap">
              Rate
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => {
            return (
              <tr
                className="border-0 border-b border-t border-grey-100 box-border"
                key={index}
              >
                <td className="bg-gray-50 px-6 text-xs p-4">{index + 1}</td>
                <td className="bg-gray-50 px-6 text-xs p-4">{category.key}</td>
                <td className="bg-gray-50 px-6 text-xs p-4">
                  {category.value} %
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmergingCategoryTable;
