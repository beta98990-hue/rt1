import React from "react";


function Shop({ item, price, count }) {
  return (
    <p>
      {item}: {count} ta × {price} = {price * count} so'm
    </p>
  );
}

export default Shop;