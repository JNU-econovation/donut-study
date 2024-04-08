import React, { useState, useEffect } from 'react';
import styles from '../../css/ItemList.module.css';
import Item from '../molecule/Item';

function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const itemData = async () => {
      try {
        const res = await fetch('/api/products.json');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('데이터를 받아오지 못했습니다', error);
      }
    };

    itemData();
  }, []);

  console.log(products);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
