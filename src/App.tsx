import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, RouteComponentProps, Router } from 'react-router-dom';
import styled from 'styled-components';

import {
  AppBar,
  Badge,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { WithWidth, isWidthUp } from '@material-ui/core/withWidth';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/styles';

import { Todo } from './model/model';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';

// Types
interface Props extends RouteComponentProps<void>, WithWidth {
  todoList: Todo[];
}

// App
const history = createBrowserHistory();

function App(props?: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const theme = useTheme<Theme>();

  if (!props) {
    return null;
  }

  const { todoList, width } = props;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Styles
  const Root = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
  `;

  const Frame = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
  `;

  const StyledAppBar = styled(AppBar)`
    z-index: ${theme.zIndex.drawer + 1};
    position: absolute;
  `;

  const NavigationIcon = styled(IconButton)`
    ${theme.breakpoints.up('md')} {
      display: none;
    }
  `;

  const StyledDrawer = styled(Drawer)`
    & .paper {
      width: 250px;
      background-color: ${theme.palette.background.default};

      ${theme.breakpoints.up('md')} {
        width: 240px;
        position: relative;
        height: 100%;
      };
    }
  `;

  const Routes = styled.div`
    background-color: ${theme.palette.background.default};
    width: 100%;
    height: calc(100% - 56px);
    margin-top: 56px;

    ${theme.breakpoints.up('sm')} {
      height: calc(100% - 64px);
      margin-top: 64px;
    };
  `;

  return (
    <Router history={history}>
      <Root>
        <Frame>
          <StyledAppBar>
            <Toolbar>
              <NavigationIcon
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </NavigationIcon>

              <Typography variant="h6" color="inherit" noWrap={isWidthUp('sm', width)}>
                Create-React-App with Material-UI, Typescript, Redux and Routing
              </Typography>
            </Toolbar>
          </StyledAppBar>

          <Hidden mdUp>
            <StyledDrawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              classes={{
                paper: 'paper',
              }}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <MenuDrawer todoList={todoList} />
            </StyledDrawer>
          </Hidden>

          <Hidden smDown>
            <StyledDrawer variant="permanent" open classes={{ paper: 'paper' }}>
              <MenuDrawer todoList={todoList} />
            </StyledDrawer>
          </Hidden>

          <Routes>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/todo" component={TodoPage} />
          </Routes>
        </Frame>
      </Root>
    </Router>
  );
}

// Menu Drawer
const useStyles = makeStyles((theme: Theme) => ({ drawerHeader: theme.mixins.toolbar }));

function MenuDrawer(props: { todoList: Todo[] }) {
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

export default App;
