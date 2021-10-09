import React from "react";
import styled from "styled-components";

function PlayersList({ players }) {
  return (
    <StyledList>
      {players.map((el, index) => (
        <li key={index}>
          <ListItem>
            <div>
              {el.name} <span>(goals:{el.goals})</span>
            </div>
            <button type="button">remove</button>
          </ListItem>
        </li>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  width: 50%;
  margin: 0 auto;
  padding-top: 100px;
  list-style: none;
  li {
    padding: 5px;
    span {
      color: gray;
      font-size: 0.8rem;
      padding-left: 7px;
    }
  }
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #efefef;
  padding: 10px 15px;
  border-radius: 5px;

  button {
    background: none;
    color: red;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default PlayersList;
