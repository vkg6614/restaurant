import React, { useState } from "react";
import Menu from "../MenuApi";
import Navbar from "../Navbar/Navbar";
import MenuCart from "../MenuCart/MenuCart";

const uniqueList = [
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),
  "All",
];

function Restaurant() {
  const [menuList, setMenuList] = useState(uniqueList);
  const [menuData, setMenuData] = useState(Menu);

  let filterItem = (category) => {
    if (category === "All") {
      return setMenuData(Menu);
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <div>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCart menuData={menuData} />
    </div>
  );
}

export default Restaurant;
