import styles from '../css/Header.module.css';
import ecnv from '../assets/Images/ecnv.png';
import user from '../assets/Images/user.png';
import cart from '../assets/Images/cart.png';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <img src={ecnv} alt='econovation logo' />
      </div>
      <div className={styles.buttonBox}>Buttons</div>
      <div className={styles.userBox}>
        <img src={user} alt='user icon' />
        <button>Log in</button>
        <img src={cart} alt='cart icon' />
      </div>
    </div>
  );
}

export default Header;
