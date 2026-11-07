import React from "react";

function Square({ side }) {
  return (
    <div>
      <p>Yuzi: {side * side}</p>
      <p>Perimetri: {4 * side}</p>
    </div>
  );
}

export default Square;