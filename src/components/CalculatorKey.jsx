import React from "react";

const CalculatorKey = ({ value, classes, onClick }) => {
  return (
    <button className={classes}
    onClick={onClick}>
      {value}
    </button>
  );
};

export default CalculatorKey;
