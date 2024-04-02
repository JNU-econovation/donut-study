import React from "react";
import styled from "styled-components";
import CardRegisterForm from "./components/CardRegisterForm";
import "./App.css";

function App() {
  return (
    <GreyBackground>
      <CardRegisterForm />
    </GreyBackground>
  );
}

export default App;

const GreyBackground = styled.div`
  background-color: #efeff0;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
