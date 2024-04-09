import { useState } from 'react';

function useProductManage(initialProducts) {
  const [products, setProducts] = useState(initialProducts);

  const handleOnSale = () => {
    const onSaleProducts = products.filter(
      (product) => product.isSale === 'true'
    );
    setProducts(onSaleProducts);
  };

  const handlePrice = () => {
    const priceLowHigh = [...products].sort(
      (a, b) => parseInt(a.price) - parseInt(b.price)
    );
    setProducts(priceLowHigh);
  };

  const handleAllItem = async () => {
    try {
      const response = await fetch('/api/products.json');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('상품을 받아오지 못했습니다');
    }
  };

  return {
    products,
    handleOnSale,
    handlePrice,
    handleAllItem,
  };
}

export default useProductManage;
