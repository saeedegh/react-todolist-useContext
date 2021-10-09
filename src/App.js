import React, { useState } from "react";
import styled from "styled-components";
// import { players } from "./constant";

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
    };

    setPlayers([...players, newPerson]);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setGoals(0);
  };

  return (
    <StyledContainer>
      <h1>arrange your football team</h1>
      <div>
        <div>
          <form onSubmit={submitHandler}>
            <FormItemContainer>
              <FormController>
                <label htmlFor="name">name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormController>
              <FormController>
                <label htmlFor="goals">goals:</label>
                <input
                  type="number"
                  id="goals"
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                />
              </FormController>
              <StyledButton>
                <button type="submit">add</button>
              </StyledButton>
            </FormItemContainer>
          </form>
        </div>
        <StyledList>
          {players.map((el, index) => (
            <li key={index}>
              <p>
                {el.name} <span>(goals:{el.goals})</span>
              </p>
            </li>
          ))}
        </StyledList>
      </div>
    </StyledContainer>
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

const StyledList = styled.ul`
  padding-top: 100px;
  li {
    padding: 5px;

    span {
      color: gray;
      font-size: 0.8rem;
      padding-left: 7px;
    }
  }
`;

const FormItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const FormController = styled.div`
  padding: 10px 5px;
  width: 40%;
  display: flex;
  flex-direction: row;
  input {
    width: 80%;
    padding: 5px;
    border-radius: 5px;
    height: 30px;
    outline: none;
    border: 1px solid gray;
  }
  label {
    display: block;
    padding: 5px 10px;
  }
`;

const StyledButton = styled.div`
  width: 20%;
  margin: 0 auto;
  button {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: orange;
  }
  button:hover {
    color: white;
    border: 2px solid orange;
  }
`;

export default App;
