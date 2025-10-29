import React from "react";
import LeftSide from "./LeftSide/LeftSide.tsx";
import SearchBar from "./SearchBar/SearchBar.tsx";
import RightSide from "./RightSide/RightSide.tsx";
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
