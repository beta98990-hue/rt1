import React from "react";


function Movie(props) {
  const { title, year, rating, children } = props;

  console.log(props);

  return (
    <div>
      <h3>{title}</h3>
      <p>
        {year}-yil, reyting: {rating} - {rating > 7 ? "Tavsiya etiladi" : "Oddiy"}
      </p>
      <p>{children}</p>
    </div>
  );
}

export default Movie;