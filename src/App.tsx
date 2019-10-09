import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, RouteComponentProps, Router } from 'react-router-dom';
import styled from 'styled-components';

import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { WithWidth, isWidthUp } from '@material-ui/core/withWidth';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/styles';

import createMenuItems from './components/MenuItems';
import { Todo } from './model/model';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';

interface Props extends RouteComponentProps<void>, WithWidth {
  todoList: Todo[];
}

const history = createBrowserHistory();

function App(props?: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const theme = useTheme<Theme>();

  if (!props) {
    return null;
  }

  const { todoList, width } = props;

  // Styled components
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

  const MainAppBar = styled(AppBar)`
    z-index: ${theme.zIndex.drawer + 1};
    position: absolute;
  `;

  const NavigationIcon = styled(IconButton)`
    ${theme.breakpoints.up('md')} {
      display: none;
    }
  `;

  const MenuDrawer = styled(Drawer)`
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

  const MenuItems = createMenuItems(history);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router history={history}>
      <Root>
        <Frame>
          <MainAppBar>
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
          </MainAppBar>

          <Hidden mdUp>
            <MenuDrawer
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
              <MenuItems todoList={todoList} />
            </MenuDrawer>
          </Hidden>

          <Hidden smDown>
            <MenuDrawer variant="permanent" open classes={{ paper: 'paper' }}>
              <MenuItems todoList={todoList} />
            </MenuDrawer>
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

export default App;
