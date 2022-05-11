import React from "react";
// import { useMemo } from "react";

function Navbar({ filterItem, menuList }) {
  //   console.log(menuList);
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {menuList &&
        menuList.map((list, index) => {
          let id = index + 1;
          return (
            <button
              style={{
                width: `23%`,
                fontSize: "1.5rem",
              }}
              key={id}
              onClick={() => filterItem(list)}
            >
              {list}
              {/* <p>{100 / menuList.length}</p> */}
            </button>
          );
        })}
    </div>
  );
}

export default Navbar;
