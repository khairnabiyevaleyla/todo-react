import React from "react";
import style from "./navrightside.module.scss";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const RightSide = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <div className={style.rightSide}>
        <select
          className={style.languageSelect}
          onChange={handleLanguageChange}
          value={i18n.language}
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="az">AZ</option>
        </select>
        <i className="ri-account-circle-2-line"></i>
      </div>
    </>
  );
};

export default RightSide;
