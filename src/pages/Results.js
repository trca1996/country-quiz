import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import Image from "../components/Image";
import {
  resetAnswerCounter,
  getRandomCountries,
} from "../features/questionSlice";

const Results = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const answerCounter = useSelector((state) => state.question.answerCounter);

  const handleClick = () => {
    // reset Counter
    dispatch(resetAnswerCounter());
    // get Random Countries for next quiz
    dispatch(getRandomCountries());
    // go back to / home route
    history.push("/");
  };

  return (
    <Container>
      <Card>
        <Image src={"/img/results.svg"} />

        <h1>Results</h1>

        <p>
          You got <span>{answerCounter}</span> correct answers
        </p>

        <button onClick={handleClick}>Try again</button>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  transition: all 0.3s linear;

  h1 {
    font-weight: 700;
    font-size: 36px;
    color: #f2f2f2;
  }
`;

const Card = styled.div`
  position: relative;
  background-color: #ffffff;
  border-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 464px;

  img {
    height: 128px;
    width: 238px;
    margin-bottom: 70px;
  }

  h1 {
    font-weight: 700;
    font-size: 48px;
    color: #1d355d;
  }

  p {
    font-size: 18px;
    color: #1d355d;
    margin-bottom: 70px;
    span {
      font-weight: 700;
      font-size: 36px;
      color: #6fcf97;
    }
  }

  button {
    outline: none;
    border: 2px solid #1d355d;
    border-radius: 12px;
    padding: 18px 60px;
    color: #1d355d;
    font-weight: 600;
    font-size: 18px;
    background-color: transparent;
  }
`;

export default Results;
