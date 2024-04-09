import styled from "styled-components";
import ItemFeed from "./ItemFeed";

export default function ShoppingList({ items }) {
  return (
    <StyledUl>
      {items.map((item) => (
        <ItemFeed key={item.id} {...item} />
      ))}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  display: grid;
  padding-left: 5rem;
  padding-right: 5rem;
  margin-top: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6rem;
  width: 100vw;
`;
