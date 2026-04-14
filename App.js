import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Learning React By Rohit Nautiyal"),
  ),
);

const jsxHeading = <h1> This is my first lesson using JSX </h1>;

const root = ReactDOM.createRoot(document.getElementById("parent"));
root.render(jsxHeading); // ✅ correct
