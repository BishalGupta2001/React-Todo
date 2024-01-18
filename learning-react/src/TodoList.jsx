import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTodo = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updateTodoTask = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        placeholder="Add Your Task"
        value={newTodo}
        onChange={updateTodoTask}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={addNewTodo}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h2>Todolist</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span> {todo.task}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Remove</button>
            <button onClick={() => upperCaseOne(todo.id)}>Upper Case</button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>UpperCase All</button>
    </div>
  );
}
