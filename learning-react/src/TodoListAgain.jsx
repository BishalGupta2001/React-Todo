import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";

// done task button click karne se todo ka value line through hona chaiye

function TodoListAgain() {
  let [todos, setTodos] = useState([
    { task: "hey", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  // without call back
  // let addNewTodo = () => {
  // setTodos([...todo, { task: newTodo, id: uuidv4() }]);
  // setNewTodo("");
  // }

  // callback
  let addNewTodo = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  // without call back
  // let upperCaseAll = () => {
  //   setTodos(todos.map((todo) => {
  //     return {
  //       ...todo,
  //       task : todo.task.toUpperCase(),
  //     };
  //   }));
  // };

  // with callback
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

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
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
        placeholder="Enter Your Todd"
        value={newTodo}
        onChange={updateTodoValue}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={addNewTodo}>Add</button>
      <hr />
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            // style={isDone ? { textDecorationLine: "line-throuhg" } : {}}
            style={todo.isDone? { textDecorationLine: "line-through" } : {}}
          >
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Remove</button>
            {/* <button onClick={() => upperCaseOne(todo.id)}>upperCase</button> */}
            <button onClick={() => markAsDone(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>Upper Case All</button>
      {/* <button onClick={ }>All Done</button> */}
    </div>
  );
}

export default TodoListAgain;