import styles from '../css/MainPage.module.css';
import MainLayout from '../components/layout/MainLayout';
import DefaultButton from '../components/atom/DefaultButton';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <MainLayout />
      <DefaultButton />
    </div>
  );
};

export default MainPage;
