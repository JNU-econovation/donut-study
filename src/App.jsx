import ContentGrid from "./components/ContentGrid";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  return (
    <StyledRoot>
      <Header />
      <ContentGrid />
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  padding-inline: 4rem;
`;

export default App;
