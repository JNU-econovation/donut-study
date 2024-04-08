import { useState, useEffect } from "react";
import Image from "./assets/Image.jpg";
import styled from "styled-components";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [currentView, setcurrentView] = useState("All product");

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
  return <></>;
}

export default App;
