import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from 'react-redux';
// import {createStore, compose, applyMiddleware} from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import {rootReducer} from './model/reducers/rootReducer'

// const saga = createSagaMiddleware()

// const store = createStore(rootReducer, compose(applyMiddleware(saga),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ))

// saga.run()

ReactDOM.render(
  // <Provider store={store}>
  <Router>
    <App />
  </Router>,
  // </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
