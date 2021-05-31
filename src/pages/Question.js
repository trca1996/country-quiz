import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";
import { showIcon, question } from "../helpFunc/helpFunc";

const Question = () => {
  const countries = useSelector((state) => state.question.randomCountries);
  const correctAnswer = useSelector((state) => state.question.correct);
  const allAnswers = useSelector((state) => state.question.answers);

  const [questionType, setQuestionType] = useState("flag"); // flag || capital

  const [answerA, setAnswerA] = useState(false); // 'correct' 'wrong' 'disabled' 'notAnswered'
  const [answerB, setAnswerB] = useState(false);
  const [answerC, setAnswerC] = useState(false);
  const [answerD, setAnswerD] = useState(false);

  const [answered, setAnswered] = useState("");

  const handleClick = (e, setFunc) => {
    if (answered) return;

    if (e.target.closest("button").value === correctAnswer) {
      setFunc(true);
      setAnswered("correct");
    }
    if (e.target.closest("button").value !== correctAnswer) {
      setFunc(true);
      setAnswered("wrong");
    }
  };

  console.log(answerA, answerB, answerC, answerD);

  return (
    <Container>
      <h1>COUNTRY QUIZ</h1>
      <Card>
        <img src="/img/question.svg" alt="" />

        <Ask>{question(questionType, countries)}</Ask>

        <Button
          className="button"
          value={allAnswers && allAnswers[0]}
          onClick={(e) => handleClick(e, setAnswerA)}
        >
          <p>A</p>
          <h4>
            {allAnswers ? allAnswers[0] : <CircularProgress size="20px" />}
          </h4>

          {showIcon(answerA, answered)}
        </Button>

        <Button
          className="button"
          value={allAnswers && allAnswers[1]}
          onClick={(e) => handleClick(e, setAnswerB)}
        >
          <p>B</p>
          <h4>
            {allAnswers ? allAnswers[1] : <CircularProgress size="20px" />}
          </h4>

          {showIcon(answerB, answered)}
        </Button>

        <Button
          className="button"
          value={allAnswers && allAnswers[2]}
          onClick={(e) => handleClick(e, setAnswerC)}
        >
          <p>C</p>
          <h4>
            {allAnswers ? allAnswers[2] : <CircularProgress size="20px" />}
          </h4>

          {showIcon(answerC, answered)}
        </Button>

        <Button
          className="button"
          value={allAnswers && allAnswers[3]}
          onClick={(e) => handleClick(e, setAnswerD)}
        >
          <p>D</p>
          <h4>
            {allAnswers ? allAnswers[3] : <CircularProgress size="20px" />}
          </h4>

          {showIcon(answerD, answered)}
        </Button>
      </Card>
    </Container>
  );
};

const Container = styled.div`
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
  width: 464px;

  img {
    height: 162px;
    width: 162px;
    position: absolute;
    top: -100px;
    right: 0;
  }
`;

const Ask = styled.div`
  color: #2f527b;
  font-weight: 700;
  font-size: 24px;
  padding: 32px 0;

  img {
    position: relative;
    top: 0;
    height: 54px;
    width: 84px;
    border-radius: 4px;
    filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  }
`;

const Button = styled.button`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  border-radius: 12px;
  outline: none;
  margin-bottom: 25px;
  cursor: pointer;

  border: 2px solid rgba(96, 102, 208, 0.7);
  color: #6066d0;
  background-color: transparent;

  &:hover {
    border: 2px solid transparent;
    color: #ffffff;
    background-color: #f9a826;
  }

  p {
    font-weight: 500;
    font-size: 24px;
  }

  h4 {
    margin-left: 46px;
    font-weight: 500;
    font-size: 18px;
  }

  /* span {
    margin-left: auto;
    font-size: 20px;
  } */

  .MuiSvgIcon-root {
    margin-left: auto !important;
  }
`;

export default Question;
