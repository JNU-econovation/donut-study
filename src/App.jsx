import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [showSaleProduct, setShowSaleProduct] = useState(false);

  function handleShowSale() {
    setShowSaleProduct(!showSaleProduct);
  }
  const fetchProducts = useEffect(() => {
    const url = showSaleProduct
      ? "api/sale_products.json"
      : "api/sale_products.json";
    fetchProducts(url);
  }, []);
  return (
    <div>
      <button onClick={handleShowSale}>
        {showSaleProduct ? "All Product" : "Sale Product"}
      </button>
    </div>
  );
};

export default App;

<button>All products</button>;
