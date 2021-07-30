import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ExecutionCounter from "./ExecutionCounter";
import ThrowNGoLevel1 from "./ThrowNGoLevel1";
import ThrowNGoLevel2 from "./ThrowNGoLevel2";
import FrizgilityLevel1 from "./FrizgilityLevel1";

const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing: border-box;
font-family: 'Press Start 2P';
}
`;

const MenuWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  text-decoration: none;
  color: black;
`;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/execution">
          <ExecutionCounter />
        </Route>
        <Route path="/throwngo1">
          <ThrowNGoLevel1 />
        </Route>
        <Route path="/throwngo2">
          <ThrowNGoLevel2 />
        </Route>
        <Route path="/frizgility1">
          <FrizgilityLevel1 />
        </Route>
        <Route path="/">
          <MenuWrapper>
            <Link
              to="/execution"
              style={{
                textDecoration: "none",
                color: "black",
                margin: "25px 0",
              }}
            >
              Execution
            </Link>
            <Link
              to="/throwngo1"
              style={{
                textDecoration: "none",
                color: "black",
                margin: "25px 0",
              }}
            >
              Throw N Go I
            </Link>
            <Link
              to="/throwngo2"
              style={{
                textDecoration: "none",
                color: "black",
                margin: "25px 0",
              }}
            >
              Throw N Go II
            </Link>
            <Link
              to="/frizgility1"
              style={{
                textDecoration: "none",
                color: "black",
                margin: "25px 0",
              }}
            >
              Frizgility I
            </Link>
          </MenuWrapper>
        </Route>
      </Switch>
      <GlobalStyle />
    </Router>
  );
};

export default App;
