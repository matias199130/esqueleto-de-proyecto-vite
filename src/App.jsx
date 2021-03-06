import "./App.css";
import React, { useState } from "react";
function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");
  const [result, setResult] = useState(0);

  function clickNumber(val) {
    if (currentOperation === "") {
      setNumber1(number1 + val);
    } else {
      setNumber2(number2 + val);
    }
  }
 function allClear(){
   setNumber1("");
   setNumber2("");
   setCurrentOperation("");
   setResult("");
 }
 function borrar(){
   setResult("");
   setNumber2("")
 }
  function clickOperation(val) {
    setCurrentOperation(val);
  }

  function getResult() {
    switch (currentOperation) {
      case "+":
        setResult(Number(number1) + Number(number2));
        break;
      case "-":
        setResult(Number(number1) - Number(number2));
        break;
      case "*":
        setResult(Number(number1) * Number(number2));
        break;
      case "/":
        setResult(Number(number1) / Number(number2));
        break;
    }
  }
  return (
    <div className="App">
      {" "}
      {/* contenedor de la calculadora */}
      <div className="calculator-grid">
        {" "}
        {/* contenedor de botones "continene todos los botones"*/}
        <div className="output">
          {" "}
          {/* pantalla de salida  */}
          <div className="previus-operand">
            {currentOperation ? number1 + currentOperation : ""}
          </div>{" "}
          {/* imput a operar */}
          <div className="current-operand">
            {result ? result : !currentOperation ? number1 : number2}
          </div>{" "}
          {/* imput ya como resultado */}
        </div>
        <button onClick={allClear} className="span-two">
          AC
        </button>
        <button onClick={borrar}>DEL</button>
        <button
          onClick={() => {
            clickOperation("/");
          }}
        >
          /
        </button>
        <button
          onClick={() => {
            clickNumber(7);
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            clickNumber(8);
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            clickNumber(9);
          }}
        >
          9
        </button>
        <button
          onClick={() => {
            clickOperation("*");
          }}
        >
          *
        </button>
        <button
          onClick={() => {
            clickNumber(4);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            clickNumber(5);
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            clickNumber(6);
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            clickOperation("+");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            clickNumber(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            clickNumber(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            clickNumber(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            clickOperation("-");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            clickNumber(".");
          }}
        >
          .
        </button>
        <button
          onClick={() => {
            clickNumber();
          }}
        >
          0
        </button>
        <button onClick={getResult} className="span-two">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
