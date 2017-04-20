import * as actionTypes from '../actionTypes';

const defaultState = {
  isLoggedIn: false
};

export default (currState = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return Object.assign({}, action.user, { isLoggedIn: true });
    default:
      return currState;
  }
};
