import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";
import { showIcon, question } from "../helpFunc/helpFunc";
import Image from "../components/Image";

const Question = () => {
  const countries = useSelector((state) => state.question.randomCountries);
  const correctAnswer = useSelector((state) => state.question.correct);
  const allAnswers = useSelector((state) => state.question.answers);

  const [questionType, setQuestionType] = useState("flag"); // flag || capital

  const [answerA, setAnswerA] = useState(false);
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

  return (
    <Container>
      <h1>COUNTRY QUIZ</h1>
      <Card>
        <Image src={"/img/question.svg"} />

        <Ask>{question(questionType, countries)}</Ask>

        <Button
          className="button"
          value={allAnswers && allAnswers[0].countryName}
          onClick={(e) => handleClick(e, setAnswerA)}
          stl={answerA && answered} // return 'correct' : 'wrong' : false
          showCorrect={answered && allAnswers ? allAnswers[0].isCorrect : false}
        >
          <p>A</p>
          <h4>
            {allAnswers ? (
              allAnswers[0].countryName
            ) : (
              <CircularProgress size="20px" />
            )}
          </h4>

          {allAnswers && showIcon(answerA, answered, allAnswers[0].isCorrect)}
        </Button>

        <Button
          className="button"
          value={allAnswers && allAnswers[1].countryName}
          onClick={(e) => handleClick(e, setAnswerB)}
          stl={answerB && answered}
          showCorrect={answered && allAnswers ? allAnswers[1].isCorrect : false}
        >
          <p>B</p>
          <h4>
            {allAnswers ? (
              allAnswers[1].countryName
            ) : (
              <CircularProgress size="20px" />
            )}
          </h4>

          {allAnswers && showIcon(answerB, answered, allAnswers[1].isCorrect)}
        </Button>

        <Button
          className="button"
          value={allAnswers && allAnswers[2].countryName}
          onClick={(e) => handleClick(e, setAnswerC)}
          stl={answerC && answered}
          showCorrect={answered && allAnswers ? allAnswers[2].isCorrect : false}
        >
          <p>C</p>
          <h4>
            {allAnswers ? (
              allAnswers[2].countryName
            ) : (
              <CircularProgress size="20px" />
            )}
          </h4>

          {allAnswers && showIcon(answerC, answered, allAnswers[2].isCorrect)}
        </Button>

        <Button
          className="button"
          value={allAnswers && allAnswers[3].countryName}
          onClick={(e) => handleClick(e, setAnswerD)}
          stl={answerD && answered}
          showCorrect={answered && allAnswers ? allAnswers[3].isCorrect : false}
        >
          <p>D</p>
          <h4>
            {allAnswers ? (
              allAnswers[3].countryName
            ) : (
              <CircularProgress size="20px" />
            )}
          </h4>

          {allAnswers && showIcon(answerD, answered, allAnswers[3].isCorrect)}
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

  border: 2px solid
    ${({ stl, showCorrect }) => {
      if (stl === "correct" || stl === "wrong" || showCorrect)
        return "transparent";
      if (stl === false) return "rgba(96,102,208,0.7)";
    }};

  color: ${({ stl, showCorrect }) => {
    if (stl === "correct" || stl === "wrong" || showCorrect) return "#ffffff";
    if (stl === false) return "#6066d0";
  }};

  background-color: ${({ stl, showCorrect }) => {
    if (stl === "correct") return "#60BF88";
    if (showCorrect) return "#60bf88";
    if (stl === "wrong") return "#EA8282";
    if (stl === false) return "transparent";
  }};

  &:hover {
    border: 2px solid transparent;
    color: #ffffff;
    background-color: ${({ stl, showCorrect }) => {
      if (showCorrect) return "#60bf88";
      if (stl === false) return "#f9a826";
    }};
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

  .MuiSvgIcon-root {
    margin-left: auto !important;
  }
`;

export default Question;
