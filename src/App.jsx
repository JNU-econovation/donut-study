import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [showSaleProduct, setShowSaleProduct] = useState(false);

  function handleShowSale() {
    setShowSaleProduct(!showSaleProduct);
  }
  function fetchProducts(url) {
    axios
      .get(url) // 요청을 보낼 URL
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error :", error);
      });
  }

  useEffect(() => {
    const url = showSaleProduct
      ? "api/products.json"
      : "api/sale_products.json";
    fetchProducts(url);
  }, [showSaleProduct]);
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
