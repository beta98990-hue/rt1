import React from "react";


function Temp({ celsius }) {
  return (
    <p>
      {celsius}°C = {celsius * 9 / 5 + 32}°F
    </p>
  );
}

export default Temp;