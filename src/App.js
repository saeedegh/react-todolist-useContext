import styled from "styled-components";
import { players } from "./constant";

function App() {
  return (
    <StyledContainer>
      <h1>arrange your football team</h1>
      <div>
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
  height: 100vh;
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
  li {
    padding: 10px;

    span {
      color: gray;
      font-size: 0.8rem;
      padding-left: 7px;
    }
  }
`;
export default App;
