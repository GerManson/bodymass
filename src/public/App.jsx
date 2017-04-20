import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import Main from './screens/Main/Main';
import e404 from '../common/ErrorPages/e404';
import LoginContainer from './screens/Login/LoginContainer';
import SignupContainer from './screens/Signup/SignupContainer';
import rootReducer from './state/reducers';
import rootSaga from './state/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

if (module.hot) {
  module.hot.accept('./state/reducers', () => {
    const nextRootReducer = require('./state/reducers');
    store.replaceReducer(nextRootReducer);
  });
}
sagaMiddleware.run(rootSaga);

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router key={Math.random()} history={browserHistory}>
          <Route path='/' component={Main}>
            <IndexRoute component={LoginContainer} />
            <Route path='signup' component={SignupContainer} />
            <Route path='*' component={e404} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
