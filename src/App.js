import React, { useState } from "react";
import styled from "styled-components";
import AddPlayerForm from "./AddPlayerForm";
import PlayersList from "./PlayersList";
import AppContextProvider from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <StyledContainer>
        <h1>arrange your football team</h1>
        <div>
          <AddPlayerForm />
          <PlayersList />
        </div>
      </StyledContainer>
    </AppContextProvider>
  );
}

const StyledContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 100px;

  h1 {
    margin: 0 auto;
    text-align: center;
    color: blue;
    padding-bottom: 50px;
  }
`;

export default App;
