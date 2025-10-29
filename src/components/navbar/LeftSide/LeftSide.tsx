import style from "./navleftside.module.scss";


const LeftSide = () => {
  return (
    <div className={style.leftSide}>
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

export default LeftSide;
