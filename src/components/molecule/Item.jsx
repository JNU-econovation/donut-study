import styles from '../../css/Item.module.css';
import Data from '../../../public/api/products.json';

function Item() {
  const example = Data[0];
  console.log(example);
  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <img src={example.src} alt='상품 이미지' />
      </div>
      <div className={styles.infoBox}>
        <h2>{example.name}</h2>
        <div className={styles.priceBox}>
          <h2>{example.price}</h2>
          <p>원</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
