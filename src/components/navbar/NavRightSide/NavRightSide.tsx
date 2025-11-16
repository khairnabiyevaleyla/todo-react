import React, { useEffect, useRef, useState } from "react";
import style from "./NavRightSide.module.scss";
import { useTranslation } from "react-i18next";

const NavRightSide = () => {
  const { i18n, t } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={style.NavRightSide}>
      <select
        className={style.languageSelect}
        onChange={handleLanguageChange}
        value={i18n.language}
      >
        <option value="en">EN</option>
        <option value="ru">RU</option>
        <option value="az">AZ</option>
      </select>

      <div
        className={style.profileIcon}
        onClick={() => setDropdownOpen((prev) => !prev)}
        ref={dropdownRef}
      >
        <i className="ri-account-circle-2-line"></i>
        <div
          className={`${style.profileDropdown} ${
            dropdownOpen ? style.open : ""
          }`}
        >
          <ul>
            <li>{t("navbar.profile-dropdown.profile")}</li>
            <li>
              <i className="ri-logout-circle-line"></i>{" "}
              {t("navbar.profile-dropdown.logout")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavRightSide;
