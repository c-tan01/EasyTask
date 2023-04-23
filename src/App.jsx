import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState([]);
  document.body.style.backgroundColor = "whitesmoke";

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <Nav />
      <Add handleChange={handleChange} addTask={addTask} />
      <Task todoList={todoList} />
    </div>
  );
}

const Nav = () => {
  return <div></div>;
};

const Add = (props) => {
  return (
    <div>
      <input
        onChange={props.handleChange}
        type="text"
        placeholder="Task Name"
        className="h-10 w-72 rounded-lg border-2 border-white px-4 text-lg placeholder-opacity-10 caret-red-500 shadow-lg outline-none transition duration-500 focus:border-red-500"
      />
      <div className="mt-4">
        <button
          onClick={props.addTask}
          className="inline-block rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white shadow-lg"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

const Task = (props) => {
  return (
    <div className="px-8">
      {props.todoList.map((Task) => {
        return (
          <div className="mt-4 rounded-lg border-none bg-white px-4 py-2 text-gray-800 shadow-lg transition-all duration-300 hover:scale-105">
            <h1>{Task}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default App;
