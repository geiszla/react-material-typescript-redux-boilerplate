import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, RouteComponentProps, Router } from 'react-router-dom';
import styled from 'styled-components/macro';

import {
  AppBar,
  Button,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { WithWidth, isWidthUp } from '@material-ui/core/withWidth';
import MenuIcon from '@material-ui/icons/Menu';

import useActions from './actions';
import * as AuthenticationActions from './actions/authentication';
import createMenuItems from './components/MenuItems';
import { Todo } from './model/model';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';

interface Props extends RouteComponentProps<void>, WithWidth {
  todoList: Todo[];
  email: string;
}

const history = createBrowserHistory();

export default function App(props?: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const authenticationActions = useActions(AuthenticationActions);

  if (!props) {
    return null;
  }

  const { todoList, width, email } = props;

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
                React boilerplate with Material-UI, Typescript, Redux and Routing
              </Typography>

              <ToolbarButtons>
                {email ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => authenticationActions.logout()}
                  >
                    Log out
                  </Button>
                ) : null}
              </ToolbarButtons>
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
            {email ? (
              <>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/todo" component={TodoPage} />
              </>
            ) : <LoginPage />}
          </Routes>
        </Frame>
      </Root>
    </Router>
  );
}

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

const MainAppBar = styled(AppBar)`
  z-index: ${(props) => props.theme.zIndex.drawer + 1};
  position: absolute;
`;

const ToolbarButtons = styled.span`
  margin-left: auto;
  margin-right: -12px;
`;

const NavigationIcon = styled(IconButton)`
  ${(props) => props.theme.breakpoints.up('md')} {
    display: none;
  }
`;

const MenuDrawer = styled(Drawer)`
  & .paper {
    width: 250px;
    background-color: ${(props) => props.theme.palette.background.default};

    ${(props) => props.theme.breakpoints.up('md')} {
      width: 240px;
      position: relative;
      height: 100%;
    };
  }
`;

const Routes = styled.div`
  background-color: ${(props) => props.theme.palette.background.default};
  width: 100%;
  height: calc(100% - 56px);
  margin-top: 56px;

  ${(props) => props.theme.breakpoints.up('sm')} {
    height: calc(100% - 64px);
    margin-top: 64px;
  };
`;
