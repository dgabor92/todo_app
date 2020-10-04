import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Take dogs for a walk!",
    "Take the rubbish out!",
  ]); // short time memory for the app; it will disappier when you refresh the page

  const [input, setInput] = useState("");

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // this will stop the refresh
    console.log("I'm working");
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Todo-App With Firebase 🔥</h1>

      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li> //going through the todo array and list the first one then through again and list the second
        ))}
      </ul>
    </div>
  );
}

export default App;
