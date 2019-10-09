import React from 'react';
import styled from 'styled-components';

import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
} from '@material-ui/core';

import useActions from '../actions';
import * as TodoActions from '../actions/todo';

interface Props {
    open: boolean;
    onClose: () => void;
}

function TodoDialog(props: Props) {
  const [newTodoText, setNewTodoText] = React.useState('');
  const todoActions = useActions(TodoActions);

  const { open, onClose } = props;

  const NameField = styled(TextField)`
    width: 80%;
    margin: 20px;
  `;

  const handleClose = () => {
    todoActions.addTodo({
      id: Math.random(),
      completed: false,
      text: newTodoText,
    });
    onClose();

    // reset todo text if user reopens the dialog
    setNewTodoText('');
  };

  const handleChange = (event: any) => {
    setNewTodoText(event.target.value);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add a new TODO</DialogTitle>
      <NameField
        id="multiline-flexible"
        multiline
        value={newTodoText}
        onChange={handleChange}
      />
      <DialogActions>
        <Button color="primary" onClick={handleClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TodoDialog;
