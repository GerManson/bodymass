import * as actionTypes from '../actionTypes';

const errorReducer = (currState = null, action) => {
  switch (action.type) {
    case actionTypes.DISMISS_ERROR:
      return null;
    case actionTypes.LOGIN_FAIL:
    case actionTypes.RECOVER_FAIL:
    case actionTypes.SIGNUP_FAIL:
    case actionTypes.CREATE_FAIL:
      return action.error.message;
    default:
      return currState;
  }
};

export default errorReducer;
