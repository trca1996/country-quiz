import { CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { showIcon } from "../helpFunc/helpFunc";

const Button = ({
  id, // 0, 1, 2, 3
  allAnswers,
  answerId,
  setAnswerId,
  answered,
  handleClick,
}) => {
  return (
    <Container
      className="button"
      value={allAnswers && allAnswers[id].countryName}
      onClick={(e) => handleClick(e, setAnswerId)}
      stl={answerId && answered}
      showCorrect={answered && allAnswers ? allAnswers[id].isCorrect : false}
    >
      <p>C</p>
      <h4>
        {allAnswers ? (
          allAnswers[id].countryName
        ) : (
          <CircularProgress size="20px" />
        )}
      </h4>

      {allAnswers && showIcon(answerId, answered, allAnswers[id].isCorrect)}
    </Container>
  );
};

const Container = styled.button`
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
    text-align: start;
  }

  .MuiSvgIcon-root {
    margin-left: auto !important;
  }
`;

export default Button;
