const defaultState = {};
import * as actionTypes from '../actionTypes.js';

export default (currState = defaultState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return action.user;
    default:
      return currState;
  }
};
