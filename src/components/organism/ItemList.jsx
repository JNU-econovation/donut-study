import styles from '../../css/ItemList.module.css';
import Item from '../molecule/Item';

function ItemList({ products }) {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
