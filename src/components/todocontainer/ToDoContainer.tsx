import SideBar from "./SideBar/SideBar";
import style from "./todo.module.scss";

const ToDoContainer = () => {
  return (
    <div className={style.toDoContainer}>
      <div className={style.sideBarContainer}>
        <SideBar />
      </div>
      <div>todo list</div>
    </div>
  );
};

export default ToDoContainer;
