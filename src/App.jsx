import Header from "./components/Header";
import styled from "styled-components";

function App() {
  return (
    <StyledRoot>
      <Header />
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  padding-inline: 2rem;
`;

export default App;
