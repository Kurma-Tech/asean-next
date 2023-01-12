import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  clearForecastChartAction,
  getForecastChartDataAction,
} from '../../lib/features/forecastChartData/forecastChartDataAction';
import { RootState } from '../../lib/store/store';

export interface IForecastChart {
  children?: React.ReactNode;
}

const ForecastChart: React.FC<IForecastChart> = () => {
  const dispatch = useDispatch();
  const [Chart, setChart] = useState<any>();
  const hasType = typeof window !== 'undefined';
  const dataType: string = useSelector(
    (state: RootState) => state.filterValues.dataType
  );
  const country: number = useSelector(
    (state: RootState) => state.filterValues.country
  );
  const category: number = useSelector(
    (state: RootState) => state.filterValues.category
  );
  const removeRequest = useSelector(
    (state: RootState) => state.mapData.removeRequest
  );
  const keys = useSelector(
    (state: RootState) => state.forecastChartData.keys,
    shallowEqual
  );
  const values = useSelector(
    (state: RootState) => state.forecastChartData.values,
    shallowEqual
  );
  const isReportVisible: boolean = useSelector(
    (state: RootState) => state.report.isReportVisible
  );
  const isReportNew: boolean = useSelector(
    (state: RootState) => state.report.isReportNew
  );

  const getData = async () => {
    dispatch(
      await getForecastChartDataAction({
        type:
          dataType == 'business'
            ? 'businesses'
            : dataType == 'patent'
            ? 'patent_pivot_patent_category'
            : dataType != 'journal'
            ? 'journal_pivot_journal_category'
            : 'businesses',
        country_id: country ?? null,
        classification_id: category ?? null,
      })
    );
  };

  useEffect(() => {
    if (removeRequest || isReportNew) {
      dispatch(clearForecastChartAction());
      getData();
    }

    import('react-apexcharts').then((mod) => {
      setChart(() => mod.default);
    });
  }, [getData]);

  var chartState = {
    options: {
      chart: {
        id: 'forecast-chart',
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
      forecastDataPoints: {
        count: 10,
      },
      xaxis: {
        categories: keys ?? [],
        tickAmount: 10,
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
        data: values ?? [],
      },
    ],
  };

  return (
    <div className="bg-white rounded-[12px] border-4 border-white box-border mt-3">
      <div className="px-3 py-2 flex justify-between items-center">
        <div className="text-xs uppercase font-semibold text-left whitespace-nowrap">
          Forecast {dataType} per year
        </div>
        <div className="flex text-[12px] items-center">
          Filtered By:
          <div className="text-[10px] bg-gray-200 uppercase px-1 rounded-sm h-min ml-1">
            Country
          </div>
          <div className="text-[10px] bg-gray-200 uppercase px-1 rounded-sm h-min ml-1">
            Classification
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

export default ForecastChart;
