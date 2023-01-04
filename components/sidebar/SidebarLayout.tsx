import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {
  children?: React.ReactNode;
}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <div className={`${styles.sidebar} w-1/6 max-w-full bg-white/[.7] backdrop-blur-[4px] box-border rounded-[12px]`}>
      <div className="w-full">
        <div className="border-b-[1px] py-[15px] px-[24px] border-b-white">
          <h3 className="text-[20px] font-semibold text-[#333] m-0 leading-[24px]">Asean</h3>
          <p className="text-[15px] font-medium text-[#777777] m-0 leading-[18px]">v2.0.0</p>
        </div>
        <div className="py-[15px] px-[24px]">
          <div className={`${styles.formGroup}`}>
            <input type="text" className={`${styles.filterInput} indent-[5px]`} />
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="">Dataset</label>
            <select name="" id="" className={`${styles.filterInput}`}>
              <option value="">hello</option>
            </select>
          </div>
          <div className={`${styles.formGroup}`}>
          <label htmlFor="">Country</label>
            <select name="" id="" className={`${styles.filterInput}`}>
              <option value="">hello</option>
            </select>
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="">Classification</label>
            <select name="" id="" className={`${styles.filterInput}`}>
              <option value="">hello</option>
            </select>
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="">Groups</label>
            <select name="" id="" className={`${styles.filterInput}`}>
              <option value="">hello</option>
            </select>
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="">Type</label>
            <select name="" id="" className={`${styles.filterInput}`}>
              <option value="">hello</option>
            </select>
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="">Kind</label>
            <select name="" id="" className={`${styles.filterInput}`}>
              <option value="">hello</option>
            </select>
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="">By Young</label>
            <select name="" id="" className={`${styles.filterInput}`}>
              <option value="">2011</option>
            </select>
          </div>
        </div>
        <div className="py-[15px] px-[24px] btn-group">
          <div className="flex justify-between">
            <button className={`${styles.filterBtn} bg-black text-[#efeef1]`}>filter</button>
            <button className={`${styles.filterBtn} bg-[#efeef1] text-[#333]`}>show report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
