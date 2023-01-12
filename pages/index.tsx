import { useSelector } from 'react-redux';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import MapLayout from '../components/map/MapLayout';
import ReportLayout from '../components/report/ReportLayout';
import SidebarLayout from '../components/sidebar/SidebarLayout';
import { changeDataset } from '../lib/features/filter/filterValuesAction';
import { RootState, wrapper } from '../lib/store/store';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const isReportVisible: boolean = useSelector(
    (state: RootState) => state.report.isReportVisible
  );
  return (
    <>
      <div className="absolute h-screen w-screen pointer-events-none">
        <div className="flex pl-8 pt-8 h-full">
          <SidebarLayout />
          <div className="w-5"></div>
          {isReportVisible ? <ReportLayout /> : <></>}
        </div>
      </div>

      <section className={styles.main}>
        <MapLayout />
      </section>
    </>
  );
};

//@ts-ignore
export const getServerSideProps = wrapper.getServerSideProps(
  //@ts-ignore
  (store) => async () => {
    store.dispatch(await changeDataset(store.getState().filterValues.dataType));
  }
);

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
