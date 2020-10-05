import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core"; // imported everything from https://material-ui.com/
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
    setInput(""); // clear up the input field
  };

  return (
    <div className="App">
      <h1>Todo-App With Firebase 🔥</h1>

      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
        {/* <button>Add Todo</button> */}
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
