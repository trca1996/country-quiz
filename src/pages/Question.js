import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { question } from "../helpFunc/helpFunc";
import Image from "../components/Image";
import {
  getRandomCountries,
  setAnswerCounter,
} from "../features/questionSlice";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";

const Question = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.question.randomCountries);
  const correctAnswer = useSelector((state) => state.question.correct);
  const allAnswers = useSelector((state) => state.question.answers);

  const [questionType, setQuestionType] = useState("flag"); // flag || capital

  const [answerA, setAnswerA] = useState(false);
  const [answerB, setAnswerB] = useState(false);
  const [answerC, setAnswerC] = useState(false);
  const [answerD, setAnswerD] = useState(false);

  const [answered, setAnswered] = useState("");

  const handleClick = useCallback(
    (e, setFunc) => {
      if (answered) return;

      if (e.target.closest("button").value === correctAnswer) {
        setFunc(true);
        setAnswered("correct");
      }
      if (e.target.closest("button").value !== correctAnswer) {
        setFunc(true);
        setAnswered("wrong");
      }
    },
    [answered, correctAnswer]
  );

  const initValues = () => {
    setAnswerA(false);
    setAnswerB(false);
    setAnswerC(false);
    setAnswerD(false);
    setAnswered("");
  };

  const handleNextClick = () => {
    // Check for correct answer
    if (answered === "correct") {
      dispatch(getRandomCountries());
      dispatch(setAnswerCounter());
      initValues();
    }

    if (answered === "wrong") {
      history.push("/results");
    }

    setQuestionType((state) => (state === "flag" ? "capital" : "flag"));
  };

  return (
    <Container>
      <h1>COUNTRY QUIZ</h1>
      <Card>
        <Image src={"/img/question.svg"} />

        <Ask>{question(questionType, countries)}</Ask>

        <Button
          id={0}
          allAnswers={allAnswers}
          answerId={answerA}
          setAnswerId={setAnswerA}
          answered={answered}
          handleClick={handleClick}
        />
        <Button
          id={1}
          allAnswers={allAnswers}
          answerId={answerB}
          setAnswerId={setAnswerB}
          answered={answered}
          handleClick={handleClick}
        />
        <Button
          id={2}
          allAnswers={allAnswers}
          answerId={answerC}
          setAnswerId={setAnswerC}
          answered={answered}
          handleClick={handleClick}
        />
        <Button
          id={3}
          allAnswers={allAnswers}
          answerId={answerD}
          setAnswerId={setAnswerD}
          answered={answered}
          handleClick={handleClick}
        />

        <NextButton
          onClick={handleNextClick}
          disabled={answered === "" ? true : false}
          show={answered}
        >
          Next
        </NextButton>
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

  @media only screen and (max-width: 500px) {
    padding:10px;
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

  @media only screen and (max-width: 500px) {
    width: 100%;
    padding: 20px;

    img{
      display: none;
    }
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
    object-fit: cover;
    border-radius: 4px;
    filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  }
`;

// const Button = styled.button`
//   display: flex;
//   padding: 10px 20px;
//   align-items: center;
//   border-radius: 12px;
//   outline: none;
//   margin-bottom: 25px;
//   cursor: pointer;

//   border: 2px solid
//     ${({ stl, showCorrect }) => {
//       if (stl === "correct" || stl === "wrong" || showCorrect)
//         return "transparent";
//       if (stl === false) return "rgba(96,102,208,0.7)";
//     }};

//   color: ${({ stl, showCorrect }) => {
//     if (stl === "correct" || stl === "wrong" || showCorrect) return "#ffffff";
//     if (stl === false) return "#6066d0";
//   }};

//   background-color: ${({ stl, showCorrect }) => {
//     if (stl === "correct") return "#60BF88";
//     if (showCorrect) return "#60bf88";
//     if (stl === "wrong") return "#EA8282";
//     if (stl === false) return "transparent";
//   }};

//   &:hover {
//     border: 2px solid transparent;
//     color: #ffffff;
//     background-color: ${({ stl, showCorrect }) => {
//       if (showCorrect) return "#60bf88";
//       if (stl === false) return "#f9a826";
//     }};
//   }

//   p {
//     font-weight: 500;
//     font-size: 24px;
//   }

//   h4 {
//     margin-left: 46px;
//     font-weight: 500;
//     font-size: 18px;
//     text-align: start;
//   }

//   .MuiSvgIcon-root {
//     margin-left: auto !important;
//   }
// `;

const NextButton = styled.button`
  align-self: flex-end;
  color: #ffffff;
  background-color: #f9a826;
  outline: none;
  border: none;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
  padding: 15px 37px;
  transition: all 0.3s linear;
  cursor: pointer;

  opacity: ${({ show }) => (show === "" ? "0" : "1")};
`;

export default Question;
