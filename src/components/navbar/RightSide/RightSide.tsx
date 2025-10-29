import React from "react";
import style from "./navrightside.module.scss";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const RightSide = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const { t } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <div className={style.rightSide}>
        <div>
          {" "}
          <select
            className={style.languageSelect}
            onChange={handleLanguageChange}
            value={i18n.language}
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="az">AZ</option>
          </select>
        </div>
        <div
          className={style.profileIcon}
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          {" "}
          <i className="ri-account-circle-2-line"></i>
          {dropdownOpen && (
            <div className={style.profileDropdown}>
              <ul>
                <li>{t("navbar.profile-dropdown.profile")}</li>
                <li>
                  <i className="ri-logout-circle-line"></i> {t("navbar.profile-dropdown.logout")}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RightSide;
