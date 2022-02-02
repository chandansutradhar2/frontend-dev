import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; //to load css
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

//using reactdom we are instructing the browser to render -
//paint React context(arg1) and location where to render(arg2)
ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
