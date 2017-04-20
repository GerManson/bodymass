import { routerReducer } from 'react-router-redux';
import error from './error/errorReducer';
import user from './user/userReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  routing: routerReducer,
  error,
  user
});
