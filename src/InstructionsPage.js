import React from "react";
import { Link } from "react-router-dom";
import "./style/App.css";

const InstructionPage = () => {
  return (
    <div className="main-container">
      <div className="instruction-container">
        <h3
          style={{
            textAlign: "left",
          }}
        >
          {" "}
          You’re about to attempt a series of challenges!{" "}
        </h3>{" "}
        <br />
        <p
          style={{
            textAlign: "left",
          }}
        >
          Here are a few instructions you can quickly go through before you
          begin the test.
          <br /> The test will judge your ability to write logical code.
          <br /> Please ensure that you have a stable internet connection. In
          case of internet issues, the decision taken by the team will be final.
          <br /> Please give the test from one of the following browsers: Google
          Chrome, Microsoft Edge, Mozilla Firebox.
        </p>
        <br />
        <Link to="/challenge">
          <button className="button"> BEGIN </button>
        </Link>
      </div>
    </div>
  );
};
export default InstructionPage;
