import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import MapLayout from '../components/map/MapLayout';
import SidebarLayout from '../components/sidebar/SidebarLayout';
import { changeDataset } from '../lib/features/filter/filterValuesAction';
import { wrapper } from '../lib/store/store';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <SidebarLayout />
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
