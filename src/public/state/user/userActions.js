import * as actionTypes from '../actionTypes';

export const loginRequest = (email, password) => {
  return {
    type: actionTypes.LOGIN_REQUEST,
    email,
    password
  };
};

export const loginSuccess = () => {
  return {
    type: actionTypes.LOGIN_SUCCESS
  };
};

export const loginFail = (error) => {
  return {
    type: actionTypes.LOGIN_FAIL,
    error
  };
};

export const recoverRequest = (email) => {
  return {
    type: actionTypes.RECOVER_REQUEST,
    email
  };
};

export const recoverSuccess = () => {
  return {
    type: actionTypes.RECOVER_SUCCESS
  };
};

export const recoverFail = (error) => {
  return {
    type: actionTypes.RECOVER_FAIL,
    error
  };
};

export const signupRequest = (name, email, password, confirm) => {
  return {
    type: actionTypes.SIGNUP_REQUEST,
    name,
    email,
    password,
    confirm
  };
};

export const signupSuccess = () => {
  return {
    type: actionTypes.SIGNUP_SUCCESS
  };
};

export const signupFail = (error) => {
  return {
    type: actionTypes.SIGNUP_FAIL,
    error
  };
};

