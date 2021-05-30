import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Question from "./pages/Question";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRandomCountries } from "./features/questionSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomCountries());
  }, [dispatch]);

  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <Question />
          </Route>
          <Route exact path="/results">
            <h1>This is the results page</h1>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
