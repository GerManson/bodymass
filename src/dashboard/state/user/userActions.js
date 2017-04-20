import * as actionTypes from '../actionTypes';

export const authRequest = () => {
  return {
    type: actionTypes.AUTH_REQUEST
  };
};

export const authSuccess = (user) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    user
  };
};

export const logoutRequest = () => {
  return {
    type: actionTypes.LOGOUT_REQUEST
  };
};

export const logoutSuccess = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const bodyMassRequest = (mass, height) => {
  return {
    type: actionTypes.BMI_REQUEST,
    mass,
    height
  };
};

export const bodyMassSuccess = (bmi) => {
  return {
    type: actionTypes.BMI_SUCCESS,
    bmi
  };
};

export const bodyMassFail = (error) => {
  return {
    type: actionTypes.BMI_FAIL,
    error
  };
};
