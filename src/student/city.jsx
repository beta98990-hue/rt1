import React from "react";



function City(props) {
  const { name, people = "noma’lum" } = props;

  return (
    <p>
      {name}: {people} kishi
    </p>
  );
}

export default City;