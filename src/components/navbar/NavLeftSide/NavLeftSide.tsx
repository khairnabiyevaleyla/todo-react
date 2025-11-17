import style from "./NavLeftSide.module.scss";


const NavLeftSide = () => {
  return (
    <div className={style.NavLeftSide}>
      <div className={style.menuIcon}>
        <i className="ri-menu-line"></i>
      </div>
      <div className={style.logo}>
        <img
          src="https://cdn-icons-png.freepik.com/256/8476/8476676.png?semt=ais_white_label"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default NavLeftSide;
