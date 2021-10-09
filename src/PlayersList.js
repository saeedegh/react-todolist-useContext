import React from "react";
import styled from "styled-components";

function PlayersList({ players }) {
  return (
    <StyledList>
      {players.map((el, index) => (
        <li key={index}>
          <p>
            {el.name} <span>(goals:{el.goals})</span>
          </p>
        </li>
      ))}
    </StyledList>
  );
}

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

export default PlayersList;
