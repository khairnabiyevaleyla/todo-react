import style from "./navsearch.module.scss";
import { useTranslation } from "react-i18next";


const NavSearchBar = () => {
  const { t } = useTranslation();




  return (
    <div className={style.NavSearchBar}>
      <div className={style.searchInput}>
        <i className="ri-search-line"></i>
        <input type="text" placeholder={t("search-bar")} />
      </div>
    </div>
  );
};

export default NavSearchBar;
