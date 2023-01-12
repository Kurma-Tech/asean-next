import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  clearTotalChartAction,
  getTotalChartDataAction,
} from '../../lib/features/totalChartData/totalChartDataAction';
import { RootState } from '../../lib/store/store';

export interface ITotalDataChart {
  children?: React.ReactNode;
}

const TotalDataChart: React.FC<ITotalDataChart> = () => {
  const dispatch = useDispatch();
  const [Chart, setChart] = useState<any>();
  const hasType = typeof window !== 'undefined';
  const dataType: string = useSelector(
    (state: RootState) => state.filterValues.dataType
  );
  const country: number = useSelector(
    (state: RootState) => state.filterValues.country
  );
  const years = useSelector(
    (state: RootState) => state.totalChartData.years,
    shallowEqual
  );
  const counts = useSelector(
    (state: RootState) => state.totalChartData.counts,
    shallowEqual
  );
  const removeRequest = useSelector(
    (state: RootState) => state.mapData.removeRequest
  );
  const isReportVisible: boolean = useSelector(
    (state: RootState) => state.report.isReportVisible
  );
  const isReportNew: boolean = useSelector(
    (state: RootState) => state.report.isReportNew
  );

  const getData = async () => {
    dispatch(
      await getTotalChartDataAction({
        dataType: dataType,
        country: country,
      })
    );
  };

  useEffect(() => {
    if (removeRequest || isReportNew) {
      dispatch(clearTotalChartAction());
      getData();
    }
    import('react-apexcharts').then((mod) => {
      setChart(() => mod.default);
    });
  }, [getData]);

  var chartState = {
    options: {
      chart: {
        id: 'total-chart',
      },
      stroke: {
        width: [3, 3, 3],
        curve: 'straight',
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: years ?? [],
      },
      colors: ['#01579b'],
      noData: {
        text: 'No enough data.',
        align: 'center',
        verticalAlign: 'middle',
      },
    },
    series: [
      {
        name: dataType.toUpperCase(),
        data: counts ?? [],
      },
    ],
  };

  return (
    <div className="bg-white rounded-[12px] border-4 border-white box-border mt-3">
      <div className="px-3 py-2 flex justify-between">
        <div className="text-xs uppercase font-semibold text-left whitespace-nowrap">
          Total {dataType} per year
        </div>
        <div className="flex text-[12px] items-center">
          Filtered By:
          <div className="text-[10px] bg-gray-200 uppercase px-1 rounded-sm h-min ml-1">
            Country
          </div>
        </div>
      </div>
      {hasType && chartState && Chart ? (
        <Chart
          //@ts-ignores
          options={chartState.options}
          series={chartState.series}
          type="line"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default TotalDataChart;
