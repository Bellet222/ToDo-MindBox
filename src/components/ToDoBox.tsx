import React, { useState } from "react";
import s from "./ToDoBox.module.scss";
import ToDoElement from "./ToDoElement";

interface Todo {
  id: number;
  text: string;
  active: boolean;
  number: number;
}

const ToDoBox = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState<string>("");
  const [filter, setFilter] = useState<string>("Активные");

  const addTodo = () => {
    if (todoText === "") return;
    setTodos([
      ...todos,
      {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        text: todoText,
        active: true,
        number: 2,
      },
    ]);
    setTodoText("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, active: !todo.active } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Активные") return todo.active;
    else if (filter === "Выполненные") return !todo.active;
    return true;
  });

  return (
    <div className={s.toDoBoxWrapper}>
      <div className={s.toDoBoxEnter}>
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Что вы хотите сделать?"
          type="text"
        />
        <button onClick={addTodo}>Добавить</button>
      </div>

      <div className={s.toDoSort}>
        <p className={s.toDoSortElement} onClick={() => setFilter("Все")}>
          Все
        </p>
        <p className={s.toDoSortElement} onClick={() => setFilter("Активные")}>
          Активные
        </p>
        <p
          className={s.toDoSortElement}
          onClick={() => setFilter("Выполненные")}
        >
          Выполненные
        </p>
      </div>

      <h3 style={{ color: "white" }}>
        {filter === "Все"
          ? "Все"
          : filter === "Активные"
          ? "Активные"
          : filter === "Выполненные"
          ? "Выполненные"
          : "Другие"}
      </h3>

      <div className={s.toDoBoxTodos}>
        {filteredTodos.map((todo) => (
          <ToDoElement
            key={todo.id}
            toDoText={todo.text}
            active={todo.active}
            toggleTodo={() => toggleTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoBox;
