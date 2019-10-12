import { History } from 'history';
import React from 'react';

import {
  Badge,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import HomeIcon from '@material-ui/icons/Home';

import { Todo } from '../model/model';

// Menu Drawer
const useStyles = makeStyles((theme: Theme) => ({ drawerHeader: theme.mixins.toolbar }));

export default function createMenuItems(history: History) {
  return (props: { todoList: Todo[] }) => {
    const { todoList } = props;

    return (
      <div>
        <div className={useStyles().drawerHeader} />

        <Divider />

        <List>
          <ListItem button onClick={() => history.push('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem button onClick={() => history.push('/todo')}>
            <ListItemIcon>
              <TodoIcon todoList={todoList} />
            </ListItemIcon>
            <ListItemText primary="Todo" />
          </ListItem>
        </List>
      </div>
    );
  };
}

// Todo Icon
function TodoIcon(props: { todoList: Todo[] }) {
  const { todoList } = props;
  const uncompletedTodos = todoList.filter((t) => t.completed === false);

  if (uncompletedTodos.length > 0) {
    return (
      <Badge color="secondary" badgeContent={uncompletedTodos.length}>
        <FormatListNumberedIcon />
      </Badge>
    );
  }

  return <FormatListNumberedIcon />;
}
