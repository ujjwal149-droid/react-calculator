import React, { useState } from "react";
import CalculatorKey from "./CalculatorKey.jsx";
import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  function onButtonClick(e) {
    console.log(e.target);
    if (e.target.classList.contains("delete")) {
      setResult("");
    } else if (e.target.classList.contains("equals")) {
      setResult(prev => calculate(prev));
    } else {
      setResult((prev) => prev + e.target.innerHTML);
    }
  }

  function calculate(exprerssion) {
    try {
      const normalized = exprerssion
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/−/g, "-");

      return eval(normalized).toString();
    } catch {
      return "Error";
    }
  };
  return (
    <div className="calculator-wrapper">
      <div className="result-section">
        <span className="cursor"></span>
        <span className="result">{result}</span>
      </div>
      <div className="input-section">
        <CalculatorKey
          onClick={onButtonClick}
          classes={"calculator-key operator delete"}
          value={"AC"}
        />
        <CalculatorKey
          onClick={onButtonClick}
          classes={"calculator-key operator"}
          value={"÷"}
        />
        <CalculatorKey
          onClick={onButtonClick}
          classes={"calculator-key operator"}
          value={"×"}
        />
        <CalculatorKey
          onClick={onButtonClick}
          classes={"calculator-key"}
          value={7}
        />
        <CalculatorKey
          onClick={onButtonClick}
          classes={"calculator-key"}
          value={8}
        />
        <CalculatorKey
          onClick={onButtonClick}
          classes={"calculator-key"}
          value={9}
        />
        <CalculatorKey
          onClick={onButtonClick}
          classes={"calculator-key operator"}
          value={"+"}
        />
        <CalculatorKey
          onClick={onButtonClick}
          classes={"calculator-key"}
          value={4}
        />
        <CalculatorKey
          onClick={onButtonClick}
          classes={"calculator-key"}
          value={5}
        />
        <CalculatorKey
          onClick={onButtonClick}
          classes={"calculator-key"}
          value={6}
        />
        <CalculatorKey
          onClick={onButtonClick}
          classes={"calculator-key operator"}
          value={"−"}
        />
        <CalculatorKey
          onClick={onButtonClick}
          classes={"calculator-key"}
          value={1}
        />
        <CalculatorKey
          onClick={onButtonClick}
          classes={"calculator-key"}
          value={2}
        />
        <CalculatorKey
          onClick={onButtonClick}
          classes={"calculator-key"}
          value={3}
        />
        <CalculatorKey
          onClick={onButtonClick}
          classes={"calculator-key zero"}
          value={0}
        />
        <CalculatorKey
          onClick={onButtonClick}
          classes={"calculator-key"}
          value={"."}
        />
        <CalculatorKey
          onClick={onButtonClick}
          classes={"calculator-key operator equals"}
          value={"="}
        />
      </div>
    </div>
  );
};

export default Calculator;
