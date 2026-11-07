import React from "react";



function Circle({ radius }) {
  return (
    <div>
      <p>Yuzi: {3.14 * radius * radius}</p>
      <p>Uzunligi: {2 * 3.14 * radius}</p>
    </div>
  );
}

export default Circle;