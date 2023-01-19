import styles from './SidebarLayout.module.css';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  changeCategory,
  changeCountry,
  changeDataset,
  changeGroup,
  changeKind,
  changeSearchText,
  changeType,
  changeYoung,
} from '../../lib/features/filter/filterValuesAction';
import { FilterValuesState } from '../../lib/features/filter/filterValuesReducer';
import { FilterDefaultValuesType } from '../../lib/features/filter/filterValuestype';
import {
  removeRequest,
  updateMapData,
} from '../../lib/features/mapData/mapDataAction';
import { requestReportNew } from '../../lib/features/report/reportSlice';
import { RootState } from '../../lib/store/store';

export interface ISidebarLayout {
  children?: React.ReactNode;
}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  const dispatch = useDispatch();
  const filterStateData: FilterValuesState = useSelector(
    (state: RootState) => state.filterValues,
    shallowEqual
  );
  const default_values: FilterDefaultValuesType | undefined = useSelector(
    (state: RootState) => state.filterValues.default_values,
    shallowEqual
  );
  const currentDataType: string = useSelector(
    (state: RootState) => state.filterValues.dataType
  );
  const isReportVisible: boolean = useSelector(
    (state: RootState) => state.report.isReportVisible
  );

  return (
    <div className="w-1/6 max-w-full h-min bg-white/[.7] backdrop-blur-[4px] box-border rounded-[12px] pointer-events-auto">
      <div className="w-full">
        <div className="border-b-[1px] py-[15px] px-[24px] border-b-white">
          <h3 className="text-[20px] font-semibold text-[#333] m-0 leading-[24px]">
            Asean
          </h3>
          <p className="text-[15px] font-medium text-[#777777] m-0 leading-[18px]">
            v2.0.0
          </p>
        </div>
        <div className="py-[15px] px-[24px]">
          <div className={`${styles.formGroup}`}>
            <input
              type="text"
              placeholder="Search"
              className={`${styles.filterInput} indent-[5px]`}
              onChange={(e) => {
                dispatch(changeSearchText(e.target.value));
              }}
            />
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="">Dataset</label>
            <select
              name=""
              id=""
              className={`${styles.filterInput}`}
              onChange={async (e) => {
                dispatch(await changeDataset(e.target.value));
              }}
            >
              {default_values
                ? default_values?.data_types?.map((data_type, index) => {
                    return (
                      <option key={index} value={data_type.name}>
                        {data_type.name}
                      </option>
                    );
                  })
                : ''}
            </select>
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="">Country</label>
            <select
              name=""
              id=""
              className={`${styles.filterInput}`}
              onChange={(e) => {
                dispatch(changeCountry(e.target.value));
              }}
            >
              <option hidden>Select Country</option>
              {default_values
                ? default_values?.countries?.map((data_type, index) => {
                    return (
                      <option key={index} value={data_type.id}>
                        {data_type.name}
                      </option>
                    );
                  })
                : ''}
            </select>
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="">Classification</label>
            <select
              name=""
              id=""
              className={`${styles.filterInput}`}
              onChange={(e) => {
                dispatch(changeCategory(e.target.value));
              }}
            >
              <option hidden>Select Classification</option>
              {default_values
                ? default_values?.categories?.map((data_type, index) => {
                    return (
                      <option key={index} value={data_type.id}>
                        {data_type.classifications}
                      </option>
                    );
                  })
                : ''}
            </select>
          </div>
          {currentDataType == 'business' ? (
            <div className={`${styles.formGroup}`}>
              <label htmlFor="">Groups</label>
              <select
                name=""
                id=""
                className={`${styles.filterInput}`}
                onChange={(e) => {
                  dispatch(changeGroup(e.target.value));
                }}
              >
                <option hidden>Select Group</option>
                {default_values
                  ? default_values?.business_groups?.map((data_type, index) => {
                      return (
                        <option key={index} value={data_type.id}>
                          {data_type.group}
                        </option>
                      );
                    })
                  : ''}
              </select>
            </div>
          ) : (
            <></>
          )}
          {currentDataType == 'business' || currentDataType == 'patent' ? (
            <div className={`${styles.formGroup}`}>
              <label htmlFor="">Type</label>
              <select
                name=""
                id=""
                className={`${styles.filterInput}`}
                onChange={(e) => {
                  dispatch(changeType(e.target.value));
                }}
              >
                <option hidden>Select Type</option>
                {default_values
                  ? (currentDataType == 'business'
                      ? default_values?.business_types
                      : currentDataType == 'patent'
                      ? default_values?.patent_types
                      : null
                    )?.map((data_type, index) => {
                      return (
                        <option key={index} value={data_type.id}>
                          {data_type.type}
                        </option>
                      );
                    })
                  : ''}
              </select>
            </div>
          ) : (
            <></>
          )}
          {currentDataType == 'patent' ? (
            <div className={`${styles.formGroup}`}>
              <label htmlFor="">Kind</label>
              <select
                name=""
                id=""
                className={`${styles.filterInput}`}
                onChange={(e) => {
                  dispatch(changeKind(e.target.value));
                }}
              >
                <option hidden>Select Kind</option>
                {default_values
                  ? default_values?.patent_kinds?.map((data_type, index) => {
                      return (
                        <option key={index} value={data_type.id}>
                          {data_type.kind}
                        </option>
                      );
                    })
                  : ''}
              </select>
            </div>
          ) : (
            <></>
          )}
          <div className={`${styles.formGroup}`}>
            <label htmlFor="">By Young</label>
            <select
              name=""
              id=""
              className={`${styles.filterInput}`}
              onChange={(e) => {
                dispatch(changeYoung(e.target.value));
              }}
            >
              <option hidden>Select By Young</option>
              {default_values
                ? default_values?.years?.map((data_type, index) => {
                    return (
                      <option key={index} value={data_type.year}>
                        {data_type.year}
                      </option>
                    );
                  })
                : ''}
            </select>
          </div>
        </div>
        <div className="py-[15px] px-[24px] btn-group">
          <div className="flex justify-between">
            <button
              className={`${styles.filterBtn} bg-black text-[#efeef1]`}
              onClick={async () => {
                dispatch(removeRequest());
                dispatch(await updateMapData(filterStateData));
              }}
            >
              filter
            </button>
            <button
              className={`${styles.filterBtn} bg-[#efeef1] text-[#333]`}
              onClick={() => {
                if (!isReportVisible) {
                  dispatch(requestReportNew());
                }
              }}
            >
              show report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
