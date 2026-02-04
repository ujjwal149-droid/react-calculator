import React, { useState } from "react";
import CalculatorKey from "./CalculatorKey.jsx";
import "./Calculator.css";

const operators = ["×", "+", "−", "÷"];
const isOperator = (val) => operators.includes(val);

const Calculator = () => {
  const [result, setResult] = useState("");

  function onButtonClick(e) {
    const value = e.target.innerHTML;

    // AC
    if (e.target.classList.contains("delete")) {
      setResult("");
      return;
    }

    // =
    if (e.target.classList.contains("equals")) {
      if (!result || isOperator(result[result.length - 1])) return;
      setResult((prev) => calculate(prev));
      return;
    }

    // decimal rules
    if (value === ".") {
      const parts = result.split(/[+\−×÷]/);
      const current = parts[parts.length - 1];
      if (!current) {
        setResult((prev) => prev + "0.");
        return;
      }
      if (current.includes(".")) return;
    }

    // prevent operator spam
    if (isOperator(value)) {
      // prevent starting with operator
      if (!result) return;

      // replace last operator
      if (isOperator(result[result.length - 1])) {
        setResult((prev) => prev.slice(0, -1) + value);
        return;
      }
    }

    setResult((prev) => prev + e.target.innerHTML);
  }

  function calculate(expression) {
    try {
      const normalized = expression
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/−/g, "-");

      return eval(normalized).toString();
    } catch {
      return "Error";
    }
  }
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
