import React from "react";
import NavLeftSide from "./NavLeftSide/NavLeftSide.tsx";
import NavSearchBar from "./NavSearchBar/NavSearchBar.tsx";
import NavRightSide from "./NavRightSide/NavRightSide.tsx";
import style from "./navbar.module.scss"

const Navbar = () => {
  return (
    <>
      {" "}
      <div className={style.navContainer}>
        <NavLeftSide />
        <NavSearchBar />
        <NavRightSide />
      </div>
    </>
  );
};

export default Navbar;
