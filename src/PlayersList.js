import React from "react";
import styled from "styled-components";

function PlayersList({ players, setPlayers }) {
  return (
    <StyledList>
      {players.map((item, index) => (
        <li key={index}>
          <ListItem>
            <div>
              {item.name} <span>(goals:{item.goals})</span>
            </div>
            <button
              type="button"
              onClick={() =>
                setPlayers(players.filter((el) => el.id !== item.id))
              }
            >
              remove
            </button>
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
