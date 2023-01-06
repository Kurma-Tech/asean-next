import styles from './SidebarLayout.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { changeDataset } from '../../lib/features/filter/filterValuesAction';
import { FilterDefaultValuesType } from '../../lib/features/filter/filterValuestype';
import { RootState } from '../../lib/store/store';

export interface ISidebarLayout {
  children?: React.ReactNode;
}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  const dispatch = useDispatch();
  const default_values: FilterDefaultValuesType | undefined = useSelector(
    (state: RootState) => state.filterValues.default_values
  );
  return (
    <div
      className={`${styles.sidebar} w-1/6 max-w-full bg-white/[.7] backdrop-blur-[4px] box-border rounded-[12px]`}
    >
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
              className={`${styles.filterInput} indent-[5px]`}
            />
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="">Dataset</label>
            <select
              name=""
              id=""
              className={`${styles.filterInput}`}
              onChange={async (e) => {
                console.log(e.target.value);
                dispatch(await changeDataset(e.target.value));
              }}
            >
              {default_values
                ? default_values?.data_types?.map((data_type, index) => {
                    return (
                      <option value={data_type.name}>{data_type.name}</option>
                    );
                  })
                : ''}
            </select>
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="">Country</label>
            <select name="" id="" className={`${styles.filterInput}`}>
              {default_values
                ? default_values?.countries?.map((data_type, index) => {
                    return (
                      <option value={data_type.id}>{data_type.name}</option>
                    );
                  })
                : ''}
            </select>
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="">Classification</label>
            <select name="" id="" className={`${styles.filterInput}`}>
              {default_values
                ? default_values?.categories?.map((data_type, index) => {
                    return (
                      <option value={data_type.id}>
                        {data_type.classifications}
                      </option>
                    );
                  })
                : ''}
            </select>
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="">Groups</label>
            <select name="" id="" className={`${styles.filterInput}`}>
              {default_values
                ? default_values?.business_groups?.map((data_type, index) => {
                    return (
                      <option value={data_type.id}>{data_type.group}</option>
                    );
                  })
                : ''}
            </select>
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="">Type</label>
            <select name="" id="" className={`${styles.filterInput}`}>
              {default_values
                ? default_values?.business_types?.map((data_type, index) => {
                    return (
                      <option value={data_type.id}>{data_type.type}</option>
                    );
                  })
                : ''}
            </select>
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="">Kind</label>
            <select name="" id="" className={`${styles.filterInput}`}>
              {default_values
                ? default_values?.patent_kinds?.map((data_type, index) => {
                    return (
                      <option value={data_type.id}>{data_type.kind}</option>
                    );
                  })
                : ''}
            </select>
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="">By Young</label>
            <select name="" id="" className={`${styles.filterInput}`}>
              {default_values
                ? default_values?.years?.map((data_type, index) => {
                    return (
                      <option value={data_type.year}>{data_type.year}</option>
                    );
                  })
                : ''}
            </select>
          </div>
        </div>
        <div className="py-[15px] px-[24px] btn-group">
          <div className="flex justify-between">
            <button className={`${styles.filterBtn} bg-black text-[#efeef1]`}>
              filter
            </button>
            <button className={`${styles.filterBtn} bg-[#efeef1] text-[#333]`}>
              show report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
