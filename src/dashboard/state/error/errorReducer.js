import * as actionTypes from '../actionTypes';

const errorReducer = (currState = null, action) => {
  switch (action.type) {
    case actionTypes.DISMISS_ERROR:
      return null;
    case actionTypes.BMI_FAIL:
      return action.error.message;
    default:
      return currState;
  }
};

export default errorReducer;
