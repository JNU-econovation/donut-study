import styles from '../../css/Header.module.css';
import ecnv from '../../assets/Images/ecnv.png';
import user from '../../assets/Images/user.png';
import cart from '../../assets/Images/cart.png';
import TabButton from '../atom/TabButton';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <Link to='/'>
          <div className={styles.logoBox}>
            <img src={ecnv} alt='econovation logo' />
          </div>
        </Link>
      </div>

      <div className={styles.buttonBox}>
        <Link to='/shop'>
          <TabButton buttonText='SHOP' />
        </Link>
        <TabButton buttonText='NEW ARRIVALS' />
        <TabButton buttonText='BRANDS' />
        <TabButton buttonText='CLOTHING' />
        <TabButton buttonText='FOOTWEAR' />
        <TabButton buttonText='ACCESSORIES' />
        <TabButton buttonText='SALE' />
        <TabButton buttonText='CONTACT' />
      </div>
      <div className={styles.userBox}>
        <button className={styles.userButton}>
          <img src={user} alt='cart icon' />
        </button>
        <TabButton buttonText='Log In' />
        <button className={styles.cartButton}>
          <img src={cart} alt='cart icon' />
        </button>
      </div>
    </div>
  );
}

export default Header;
