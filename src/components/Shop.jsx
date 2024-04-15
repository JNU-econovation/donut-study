import styled from "styled-components";
import Intro from "./Intro";
import ShoppingList from "./ShoppingList";
import ToggleBtn from "./ToggleBtn";
import { useEffect, useState } from "react";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [isSale, setIsSale] = useState(false);
  const url = !isSale ? "api/products.json" : "api/sale_products.json";
  const buttonText = !isSale ? "Show Sale product" : "All products";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [isSale]);

  const buttonHandler = () => setIsSale(!isSale);

  return (
    <Main>
      <Intro />
      <ToggleBtn buttonText={buttonText} buttonHandler={buttonHandler} />
      <ShoppingList items={items} />
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
