import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [showSaleProduct, setShowSaleProduct] = useState(false);
  const [products, setProducts] = useState([]);

  function handleShowSale() {
    setShowSaleProduct(!showSaleProduct);
  }

  function fetchProducts(url) {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
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
        {showSaleProduct ? "Sale Product" : "All Product"}
      </button>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <img src={product.src} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
