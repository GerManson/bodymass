import * as actionTypes from '../actionTypes.js';

const defaultState = null;

export default (currState = defaultState, action) => {
  switch (action.type) {
    case actionTypes.BMI_SUCCESS:
      return action.bmi;
    case actionTypes.BMI_FAIL:
      return defaultState;
    default:
      return currState;
  }
};
