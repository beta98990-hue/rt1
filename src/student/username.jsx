import React from "react";



function Username({ login }) {
  return (
    <p>
      {login.toUpperCase()} - {login.length} ta belgi
    </p>
  );
}

export default Username;