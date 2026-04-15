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

//functional Component
const HeadingComponent = () => (
  <h1 className="heading">Hello! i am not Rohit Nautiyal</h1>
);
//component composition
const HeadingComponent1 = () => (
  <div id="container">
    <HeadingComponent />
    <h1 className="heading1">Hello! i am Rohit Nautiyal</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("parent"));
root.render(<HeadingComponent1 />); // ✅ correct
