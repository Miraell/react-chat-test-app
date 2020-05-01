import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducers from './redux/reducers';
import messageSaga from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers.messageReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(messageSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
