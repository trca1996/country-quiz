import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { CircularProgress } from "@material-ui/core";

export const showIcon = (answerId, answered) => {
  if (answerId && answered === "correct") {
    return <CheckCircleOutlineIcon />;
  }
  if (answerId && answered === "wrong") {
    return <HighlightOffIcon />;
  }
};

export const question = (questionType, countries) => {
  if (questionType === "capital") {
    if (countries) {
      return <h3>{countries[0].capital} is the capital of</h3>;
    } else {
      return <CircularProgress />;
    }
  }

  if (questionType === "flag") {
    if (countries) {
      return (
        <>
          <img src={countries[0].flag} alt="" />
          <h3>Which country does this flag belong to?</h3>
        </>
      );
    } else {
      return <CircularProgress />;
    }
  }
};
