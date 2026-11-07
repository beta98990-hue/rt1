import React from "react";



function Teacher({ name, subject, children }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Fan: {subject}</p>
      <p>{children}</p>
    </div>
  );
}

export default Teacher;