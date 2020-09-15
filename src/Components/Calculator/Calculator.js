import React, { useState } from "react";
import Keyboard from "./Keyboard";
import Screen from "./Screen";

const Calculator = () => {
  const [input, setInput] = useState("");

  //add input
  const addInput = (char) => {
    let newInput = input;
    switch (char) {
      case "=": calculate();
        break;
      case "C": reset();
        break;
      case "CE": backspace();
        break;
      default: newInput += char;
        setInput(newInput);

    }
  };

  //Clear The Screen 
  const reset = () => {
    setInput("");
  }

  //Clear one last input entry
  const backspace = () => {
    let slicedInput = input.slice(0, -1);
    setInput(slicedInput);
  }

  //Calculate result 
  const calculate = () => {
    let output = "";
    try {
      if (input.includes("--")) {
        output = input.replace("--", "+");
      } else if (input.includes("++")) {
        output = input.replace("++", "+");
      }
      else {
        output = input;
      }

      // eslint-disable-next-line
      setInput(eval(output));
      // || "") + "";

    } catch (e) {
      setInput("SyntaxError");
    }

  }
  return (
    <div className="CalcContainer">
      Simple Calculator
      <Screen input={input} />
      <Keyboard addInput={addInput} />
    </div>
  );
}

export default Calculator;