const defaultState = {};
import * as actionTypes from '../actionTypes.js';

export default (currState = defaultState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return action.user;
    case actionTypes.BMI_SUCCESS:
      return action.bmi;
    default:
      return currState;
  }
};
