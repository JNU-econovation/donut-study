import styled from "styled-components";

const Category = ({ tags }) => {
  return (
    <StyledCategory>
      <StyleTitle>카테고리</StyleTitle>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </StyledCategory>
  );
};

export default Category;

const StyledCategory = styled.div`
  width: 19rem;
  border: 0.1rem solid #acacac;
  border-radius: 0.3rem;
  padding: 1rem;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0.5rem 0;
    padding: 0.5rem;
    background-color: #f0f0f0;
    border-radius: 0.25rem;
  }
`;

const StyleTitle = styled.div`
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
`;
