import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ExecutionCounter from "./ExecutionCounter";
import ThrowNGoLevel1 from "./ThrowNGoLevel1";

const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing: border-box;
font-family: 'Press Start 2P';
}
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
        <Route path="/">
          <h1>Menu</h1>
        </Route>
      </Switch>
      <GlobalStyle />
    </Router>
  );
};

export default App;
