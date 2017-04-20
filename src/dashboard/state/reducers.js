import { routerReducer } from 'react-router-redux';
import error from './error/errorReducer';
import user from './user/userReducer';
import bmi from './bmi/bmiReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  routing: routerReducer,
  error,
  user,
  bmi
});
