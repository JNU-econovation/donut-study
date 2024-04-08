import styles from '../../css/Item.module.css';

function Item({ product }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <img src={product.src} alt='상품 이미지' />
      </div>
      <div className={styles.infoBox}>
        <h2>{product.name}</h2>
        <div className={styles.priceBox}>
          <h2>{product.price}</h2>
          <p>원</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
