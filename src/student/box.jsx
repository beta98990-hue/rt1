import React from 'react'


function Box({ title, children }) {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default Box;