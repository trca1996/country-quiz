import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Question from "./pages/Question";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries, getRandomCountries } from "./features/questionSlice";
import Results from "./pages/Results";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;flag")
      .then((res) => res.json())
      .then((data) => {
        dispatch(getAllCountries(data));
        dispatch(getRandomCountries());
      });
  }, [dispatch]);

  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <Question />
          </Route>
          <Route exact path="/results">
            <Results />
          </Route>
        </Switch>
      </Router>
      <CreatedText>
        created by <span>trca1996</span> - devChallenges.io
      </CreatedText>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  /* position: absolute;
  top: 0;
  left: 0; */
  padding: 15px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CreatedText = styled.p`
  text-align: center;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 10px;

  /* position: absolute;
  left: 10px;
  top: 10px; */

  span {
    text-decoration: underline;
  }
`;
export default App;
