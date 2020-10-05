import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core"; // imported everything from https://material-ui.com/
import "./Todo.css";

function Todo(props) {
  //going through the todo array and list the first one then through again and list the second
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemText primary={props.text} secondary="Dummy deadline ⏰" />
      </ListItem>
    </List>
  );
}

export default Todo;
