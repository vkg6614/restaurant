import React from "react";
import "./MenuCart.css";

function MenuCart({ menuData }) {
  return (
    <div className="container">
      {menuData &&
        menuData.map((data) => {
          let { id, name, price, category, image, description } = data;
          return (
            <div key={id} className="div-box">
              <p>{name}</p>
              <p>{category}</p>
              <p>{price}</p>
              <p>{description}</p>
              <img width="320px" height="200px" src={image} alt={name} />
            </div>
          );
        })}
    </div>
  );
}

export default MenuCart;
