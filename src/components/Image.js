import React from "react";
import styled from "styled-components";

const Image = React.memo(function Image({ src }) {
  return <StyledImage src={src} alt="" />;
});

const StyledImage = styled.img`
 @media only screen and (max-width: 500px) {
   display: none
}
`

export default Image;
