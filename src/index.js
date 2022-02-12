import React from "react";
import ReactDOM from "react-dom";

const fName = "Carlos";
const lName = "Topete";

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}!</p>
    <p>Another way to write your full name is {fName + " " + lName}</p>
  </div>,
  document.getElementById("root")
);
