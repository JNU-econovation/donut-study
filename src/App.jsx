import { useState, useEffect } from "react";
import Image from "./assets/Image.jpg";
import styled from "styled-components";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [currentView, seCurrentView] = useState("All product");

  useEffect(() => {
    axios
      .get(
        `api/${
          currentView === "All product" ? "products.json" : "sale_products.json"
        }`
      )
      .then((res) => {
        setProducts(res.data);
      });
  }, [currentView]);
  return (
    <>
      <img src={Image} style={{ width: "100%" }} />
      <ProductFrame>
        {
          <Button
            onClick={() => {
              seCurrentView(
                currentView === "Sale product" ? "All product" : "Sale product"
              );
            }}
          >
            {currentView === "All product" ? "All product" : "Sale product"}
          </Button>
        }
        <ProductList>
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.src} style={{ width: "100%" }} />
              <div>{product.name}</div>
              <div>{product.price}</div>
            </div>
          ))}
        </ProductList>
      </ProductFrame>
    </>
  );
}

export default App;

const ProductFrame = styled.div`
  padding: 1.5rem;
`;
const ProductList = styled.div`
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
  padding: 1rem;
  & > div {
    width: calc((100% - 10rem) / 3);
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 1rem;
  font-size: 1.5rem;
  width: auto;
  height: 3rem;
`;
