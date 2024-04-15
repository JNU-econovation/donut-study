import styled from "styled-components";

export default function ItemFeed({ id, src, name, price }) {
  return (
    <StyledList key={id}>
      <img src={src} />
      <div>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </StyledList>
  );
}

const StyledList = styled.li`
  width: 100%;
  img {
    width: 100%;
    border-radius: 0.75rem;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;
