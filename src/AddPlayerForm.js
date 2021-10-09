import React from "react";
import styled from "styled-components";

function AddPlayerForm({ submitHandler, setName, setGoals, name, goals }) {
  return (
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
  );
}

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

export default AddPlayerForm;
