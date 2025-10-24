import React from "react";
import LeftSide from "./LeftSide";
import SearchBar from "./SearchBar";
import RightSide from "./RightSide";
import style from "./navbar.module.scss"

const Navbar = () => {
  return (
    <>
      {" "}
      <div className={style.navContainer}>
        <LeftSide />
        <SearchBar />
        <RightSide />
      </div>
    </>
  );
};

export default Navbar;
