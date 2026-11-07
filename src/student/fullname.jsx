import React from "react";



function FullName({ firstName, lastName }) {
  return (
    <div>
      <p>To‘liq ism: {firstName} {lastName}</p>
      <p>Qisqacha: {firstName[0]}.{lastName[0]}.</p>
    </div>
  );
}

export default FullName;