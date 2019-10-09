import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import useActions from '../actions';
import * as TodoActions from '../actions/todo';
import { Todo } from '../model/model';
import { RootState } from '../reducers';

function TodoTable() {
  const Root = styled(Paper)`
    width: 100%;
    min-width: 260px;
    display: inline-block;
  `;

  const ContentTable = styled(Table)`
    width: 100%;
  `;

  const todoList = useSelector((state: RootState) => state.todoList);
  const todoActions = useActions(TodoActions);

  const onRowClick = (todo: Todo) => {
    if (todo.completed) {
      todoActions.uncompleteTodo(todo.id);
    } else {
      todoActions.completeTodo(todo.id);
    }
  };

  return (
    <Root>
      <ContentTable>
        <TableHead>
          <TableRow>
            <TableCell padding="default">Completed</TableCell>
            <TableCell padding="default">Text</TableCell>
            <TableCell padding="default">Delete</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {todoList.map((n: Todo) => (
            <TableRow
              key={n.id}
              hover
              onClick={() => onRowClick(n)}
            >
              <TableCell padding="none">
                <Checkbox checked={n.completed} />
              </TableCell>
              <TableCell padding="none">{n.text}</TableCell>
              <TableCell padding="none">
                <IconButton
                  aria-label="Delete"
                  color="default"
                  onClick={() => todoActions.deleteTodo(n.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </ContentTable>
    </Root>
  );
}

export default TodoTable;
