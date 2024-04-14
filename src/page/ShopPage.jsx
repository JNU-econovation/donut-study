import { useState, useEffect } from 'react';
import DefaultButton from '../components/atom/DefaultButton';
import ItemList from '../components/organism/ItemList';
import styles from '../css/ShopPage.module.css';
import useProductManage from '../hooks/useProductManage';

function ShopPage() {
  const { products, handleOnSale, handlePrice, handleAllItem } =
    useProductManage([]);

  useEffect(() => {
    handleAllItem();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.buttonBox}>
        <DefaultButton buttonText='All' onClick={handleAllItem} />
        <DefaultButton buttonText='on Sale' onClick={handleOnSale} />
        <DefaultButton buttonText='price low-high' onClick={handlePrice} />
      </div>
      <div className={styles.itemBox}>
        <ItemList products={products} />
      </div>
    </div>
  );
}

export default ShopPage;
