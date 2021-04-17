import React, { useState } from 'react';
import { Button, List, ListItem, ListItemText, Modal } from '@material-ui/core'; // imported everything from https://material-ui.com/
import './Todo.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from '../firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // css for edit field
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  //going through the todo array and list the first one then through again and list the second
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const updateTodo = () => {
    // update the todo with the new input text
    db.collection('todo')
      .doc(props.todo.id)
      .set({ todo: input }, { merge: true });
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>I am a modal</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button variant="contained" color="primary" onClick={updateTodo}>
            Update Todo
          </Button>
        </div>
      </Modal>
      <List className="todo_list">
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary="Dummy deadline ⏰"
          />
        </ListItem>
        <button onClick={(e) => setOpen(true)}>Edit</button>
        <DeleteForeverIcon
          onClick={(event) => db.collection('todo').doc(props.todo.id).delete()} // one line code and you could delete todo
        />
      </List>
    </>
  );
}

export default Todo;
