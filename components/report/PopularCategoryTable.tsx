import { useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  clearPopularData,
  getPopularCategoryDataAction,
} from '../../lib/features/popularCategory/popularCategoryAction';
import { ResponsePopularCategoryType } from '../../lib/features/popularCategory/popularCategoryType';
import { RootState } from '../../lib/store/store';

export interface IPopularCategoryTable {
  children?: React.ReactNode;
}

const PopularCategoryTable: React.FC<IPopularCategoryTable> = () => {
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
  const categories: ResponsePopularCategoryType[] = useSelector(
    (state: RootState) => state.popularCategory.categories,
    shallowEqual
  );
  const limit: number = useSelector(
    (state: RootState) => state.popularCategory.limit
  );
  const removeRequest = useSelector(
    (state: RootState) => state.mapData.removeRequest
  );
  const isReportNew: boolean = useSelector(
    (state: RootState) => state.report.isReportNew
  );

  const getData = useCallback(async () => {
    dispatch(
      await getPopularCategoryDataAction({
        dataType: dataType,
        limit: limit,
        country: country,
        year: year,
      })
    );
  }, [dispatch, dataType, limit, country, year]);

  useEffect(() => {
    if (removeRequest || isReportNew) {
      dispatch(clearPopularData());
      getData();
    }
  }, [getData, dispatch, isReportNew, removeRequest]);
  return (
    <div className="bg-white rounded-[12px] h-[320px] overflow-auto border-4 border-white box-border">
      <table className="table-auto items-center w-full">
        <thead className="sticky bg-white top-0">
          <tr>
            <th className="px-3 py-2 text-xs uppercase font-semibold text-left whitespace-nowrap">
              Popular Businesses
            </th>
            <th></th>
            <th className="px-3 py-2 flex justify-end items-center">
              <div className="flex text-[12px] items-center">
                Filtered By:
                <div className="text-[10px] bg-gray-200 uppercase px-1 rounded-sm h-min ml-1">
                  Country
                </div>
                <div className="text-[10px] bg-gray-200 uppercase px-1 rounded-sm h-min mx-1">
                  Young
                </div>
              </div>
              <select
                name=""
                id=""
                className="rounded-[5px] text-xs border px-1 py-[1px] border-grey-100 box-border"
                onChange={async (e) => {
                  dispatch(
                    await getPopularCategoryDataAction({
                      dataType: dataType,
                      limit: Number(e.target.value),
                      country: country,
                      year: year,
                    })
                  );
                }}
              >
                <option value={10}>Top 10</option>
                <option value={20}>Top 20</option>
                <option value={30}>Top 30</option>
              </select>
            </th>
          </tr>
          <tr>
            <th className="px-6 py-3 text-xs uppercase font-semibold text-left whitespace-nowrap">
              S.N
            </th>
            <th className="px-6 py-3 text-xs uppercase font-semibold text-left whitespace-nowrap">
              Industry Classification
            </th>
            <th className="px-6 py-3 text-xs uppercase font-semibold text-left whitespace-nowrap">
              Count
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
                  {category.value}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PopularCategoryTable;
