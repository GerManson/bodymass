import error from './error/errorReducer';
import user from './user/userReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  error,
  user
});
