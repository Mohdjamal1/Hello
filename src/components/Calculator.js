import React, { useState } from "react";

const Calculator = () => {
  let [message, setMessage] = useState({ msg: "", color: "" });
  let [result, setResult] = useState();
  let [errorMsg, setErrorMsg] = useState("");

  function validation(e) {
    let opr = e.target.textContent;
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    if (!num1 && num1 !== 0) {
      setMessage({ ...message, msg: "error", color: "red" });
      setErrorMsg("Num1 Cannot Be Empty");
    } else if (!num2 && num2 !== 0) {
      setMessage({ ...message, msg: "error", color: "red" });
      setErrorMsg("Num2 Cannot Be Empty");
    } else if (num1 === 0 || num2 === 0 || (num1 && num2)) {
      setMessage({ ...message, msg: "success!", color: "blue" });
      setErrorMsg("");
      calculateResult(opr, num1, num2);
    } else {
      setMessage({ ...message, msg: "Error", color: "red" });
      setErrorMsg("Give the numeric value");
    }
  }

  function calculateResult(operator, num1, num2) {
    switch (operator) {
      case "+":
        setResult(num1 + num2);
        console.log(result);
        break;
      case "-":
        setResult(num1 - num2);
        console.log(result);
        break;
      case "*":
        setResult(num1 * num2);
        console.log(result);
        break;
      case "/":
        setResult(num1 / num2);
        console.log(result);
        break;
      default:
        break;
    }
  }

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input type="text" id="num1" placeholder="Num 1" />
      <input type="text" id="num2" placeholder="Num 2" />
      <div id="btn">
        <button id="add" onClick={validation}>
          +
        </button>
        <button id="sub" onClick={validation}>
          -
        </button>
        <button id="mul" onClick={validation}>
          *
        </button>
        <button id="divide" onClick={validation}>
          /
        </button>
      </div>
      <span id="msg" style={{ color: message.color }}>
        {message.msg}
      </span>
      <span id="result">{errorMsg ? errorMsg : result !== undefined ?`result = ${result}`:""}</span>
    </div>
  );
};

export default Calculator;
