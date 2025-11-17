import React, { useState } from "react";
import style from "./todosidebar.module.scss";
import { useTranslation } from "react-i18next";

const ToDoSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const ToDoSideBarItems = [
    { icon: <i className="ri-todo-line"></i>, label: t("ToDoSideBar.lists") },
    { icon: <i className="ri-archive-line"></i>, label: t("ToDoSideBar.archive") },
    { icon: <i className="ri-delete-bin-line"></i>, label: t("ToDoSideBar.deleted") },
  ];

  return (
    <div
      className={`${style.ToDoSideBarContent} ${isOpen ? style.open : style.closed}`}
    >
      {ToDoSideBarItems.map((item, index) => (
        <div
          key={index}
          className={style.ToDoSideBarItem}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={style.icon}>{item.icon}</span>
          {isOpen && <span className={style.label}>{item.label}</span>}
        </div>
      ))}
    </div>
  );
};

export default ToDoSideBar;
