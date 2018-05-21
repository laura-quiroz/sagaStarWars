import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import createSadaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { reducer } from "./redux";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSadaMiddleware();

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(
  reducer, compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
