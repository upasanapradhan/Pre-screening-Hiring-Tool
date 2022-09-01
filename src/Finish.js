import React from "react";
import "./style/App.css";

const finish = () => 
{
    return (
      <div className="main-container">
      <div className="finish-container">
        <h1
          style={{
            textAlign: "left",
          }}
        >
          {" "}
          THANKYOU !{" "}
        </h1>
        <h3
          style={{
            textAlign: "left",
          }}
        >
          {" "}
          You have completed all the challenges in the Pre-screening round.
        </h3>
        <h4
          style={{
            textAlign: "left",
          }}
        >
          {" "}
          We will get in touch with you soon.{" "}
        </h4>
      </div>
      </div>
    );
}
export default finish;