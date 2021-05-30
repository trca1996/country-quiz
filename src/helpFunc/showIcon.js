const showIcon = (answerId, answered) => {
  if (answerId && answered) {
    return <span className="material-icons">check_circle_outline</span>;
  }
  if (answered) {
    return <span className="material-icons">highlight_off</span>;
  }
};

export default showIcon;
