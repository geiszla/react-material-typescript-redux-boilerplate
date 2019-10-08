import './utilities/polyfill';

import localforage from 'localforage';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';

import { CssBaseline, Typography, withWidth } from '@material-ui/core';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';

import App from './App';
import rootReducer, { RootState } from './reducers';
import theme from './theme';
import registerServiceWorker from './utilities/registerServiceWorker';

// PWA with service worker in production mode
registerServiceWorker();

const persistConfig: PersistConfig<any> = {
  key: 'root',
  version: 1,
  storage: localforage,
  blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer());

const middleware = process.env.NODE_ENV === 'development'
  ? composeWithDevTools(applyMiddleware(createLogger(), thunk))
  : applyMiddleware(thunk);

const store = createStore(persistedReducer, {}, middleware);
const persistor = persistStore(store);

// Apply MaterialUI wrappers
const AppWithWidth = withWidth()(App);

/* eslint react/jsx-props-no-spreading: 0 */
const wrapApp = (props: object) => (
  <ThemeProvider theme={theme}>
    <StylesProvider injectFirst>
      <CssBaseline />
      <AppWithWidth {...props} />
    </StylesProvider>
  </ThemeProvider>
);

// Connect to Redux store
const ConnectedApp = connect((state: RootState) => ({
  todoList: state.todoList,
}))(wrapApp);

// Render the app with Redux wrappers
ReactDOM.render((
  <Provider store={store}>
    <PersistGate
      loading={<Typography>Loading...</Typography>}
      persistor={persistor}
    />
    <ConnectedApp />
  </Provider>
), document.getElementById('root'));
