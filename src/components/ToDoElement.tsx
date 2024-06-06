import React from "react";
import s from "./ToDoElement.module.scss";

interface ToDoElementProps {
  toDoText: string;
  active: boolean;
  toggleTodo: () => void;
}

const ToDoElement = ({ toDoText, active, toggleTodo }: ToDoElementProps) => {
  return (
    <div className={s.todoElement} onClick={toggleTodo}>
      <label className={s.container}>
        <input type="checkbox" checked={!active} readOnly />
        <div className={s.checkmark}></div>
      </label>
      <p>{}</p>

      <p>{toDoText}</p>
    </div>
  );
};

export default ToDoElement;
