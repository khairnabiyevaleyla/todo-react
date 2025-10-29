import style from "./navsearch.module.scss";
import { useTranslation } from "react-i18next";


const SearchBar = () => {
  const { t } = useTranslation();




  return (
    <div className={style.searchBar}>
      <div className={style.searchInput}>
        <i className="ri-search-line"></i>
        <input type="text" placeholder={t("search_bar")} />
      </div>
    </div>
  );
};

export default SearchBar;
