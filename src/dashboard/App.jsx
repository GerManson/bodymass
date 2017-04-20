import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import MainContainer from './components/Main/MainContainer';
import * as screens from './screens';
import e404 from '../common/ErrorPages/e404';
import rootReducer from './state/reducers';
import rootSaga from './state/sagas';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory)));

if (module.hot) {
  module.hot.accept('./state/reducers', () => {
    const nextRootReducer = require('./state/reducers');
    store.replaceReducer(nextRootReducer);
  });
}
sagaMiddleware.run(rootSaga);

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router key={Math.random()} history={history}>
          <Route path='/' component={MainContainer}>
            <IndexRedirect to='dashboard' />
            <Route path='/dashboard' component={screens.BodyMassContainer} />
            <Route path='*' component={e404} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
