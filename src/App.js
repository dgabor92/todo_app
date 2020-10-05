import React, { useState, useEffect } from "react";
import Todo from "./Components/Todo";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core"; // imported everything from https://material-ui.com/
import "./App.css";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]); // short time memory for the app; it will disappier when you refresh the page
  const [input, setInput] = useState("");

  //when the app load, we need to listen with database and fetch new todos when they added/removed

  useEffect(() => {
    // this code... fires when the app loads
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

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
          <Todo text={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
