import React, { useState } from "react";
import styled from "styled-components";
import AddPlayerForm from "./AddPlayerForm";
import PlayersList from "./PlayersList";

export const DataContext = React.createContext({
  name: "",
  goals: 0,
  players: [],
  setName: () => {},
  setGoals: () => {},
  setPlayers: () => {},
});

function App() {
  const [name, setName] = useState("");
  const [goals, setGoals] = useState(0);
  const [players, setPlayers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, goals);
    const newPerson = {
      name,
      goals,
      id: new Date().getTime(),
    };
    console.log(newPerson);

    setPlayers([...players, newPerson]);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setGoals(0);
  };

  return (
    <DataContext.Provider
      value={{ name, setName, goals, setGoals, players, setPlayers }}
    >
      <StyledContainer>
        <h1>arrange your football team</h1>
        <div>
          <AddPlayerForm submitHandler={submitHandler} />
          <PlayersList />
        </div>
      </StyledContainer>
    </DataContext.Provider>
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
