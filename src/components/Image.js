import React from "react";

const Image = React.memo(function Image({ src }) {
  return <img src={src} alt="" />;
});

export default Image;
