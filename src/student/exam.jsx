import React from "react";


function Exam({ name, score }) {
  return (
    <p>
      {name}: {score} ball - {score >= 56 ? "O'tdi" : "O'tmadi"}
    </p>
  );
}

export default Exam;
