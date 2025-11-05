import React, { useState } from "react";
import style from "./sidebar.module.scss";
import { useTranslation } from "react-i18next";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const sidebarItems = [
    { icon: <i className="ri-todo-line"></i>, label: t("sidebar.lists") },
    { icon: <i className="ri-archive-line"></i>, label: t("sidebar.archive") },
    { icon: <i className="ri-delete-bin-line"></i>, label: t("sidebar.deleted") },
  ];

  return (
    <div
      className={`${style.sideBarContent} ${isOpen ? style.open : style.closed}`}
    >
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className={style.sidebarItem}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={style.icon}>{item.icon}</span>
          {isOpen && <span className={style.label}>{item.label}</span>}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
