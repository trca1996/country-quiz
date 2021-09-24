import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { CircularProgress } from "@material-ui/core";

export const showIcon = (answerId, answered, isCorrect) => {
  if (answerId && answered === "correct") {
    return <CheckCircleOutlineIcon />;
  }
  if (answerId && answered === "wrong") {
    return <HighlightOffIcon />;
  }

  if (answered === "wrong" && isCorrect === true) {
    return <CheckCircleOutlineIcon />;
  }
};

export const question = (questionType, countries) => {
  if (questionType === "capital") {
    if (countries) {
      return <h3>{countries[0].capital[0]} is the capital of</h3>;
    } else {
      return <CircularProgress />;
    }
  }

  if (questionType === "flag") {
    if (countries) {
      return (
        <>
          <img src={countries[0].flags[0]} alt="" />
          <h3>Which country does this flag belong to?</h3>
        </>
      );
    } else {
      return <CircularProgress />;
    }
  }
};
