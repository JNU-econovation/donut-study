import styled from "styled-components";

const Header = () => {
  return <StyledTitle>도넛 블로그</StyledTitle>;
};

export default Header;

const StyledTitle = styled.header`
  font-size: 1.4rem;
  text-align: center;
  border-bottom: 1px solid #000000;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;
