import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {
  children?: React.ReactNode;
}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <div className={styles.sidebar}>
      <p>SideBarLayout</p>
    </div>
  );
};

export default SidebarLayout;
