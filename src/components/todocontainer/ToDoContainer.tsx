import ToDoSideBar from "./ToDoSideBar/ToDoSideBar";
import style from "./todo.module.scss";

const ToDoContainer = () => {
  return (
    <div className={style.toDoContainer}>
      <div className={style.ToDoSideBarContainer}>
        <ToDoSideBar />
      </div>
      <div>todo list</div>
    </div>
  );
};

export default ToDoContainer;
