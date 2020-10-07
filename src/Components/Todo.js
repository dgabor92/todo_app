import React from "react";
import { Button, List, ListItem, ListItemText } from "@material-ui/core"; // imported everything from https://material-ui.com/
import "./Todo.css";
import db from "../firebase";

function Todo(props) {
  //going through the todo array and list the first one then through again and list the second

  return (
    <List className="todo_list">
      <ListItem>
        <ListItemText primary={props.todo.todo} secondary="Dummy deadline ⏰" />
      </ListItem>
      <Button
        onClick={(event) => db.collection("todo").doc(props.todo.id).delete()}
      >
        ❌ Delete Me
      </Button>
    </List>
  );
}

export default Todo;
