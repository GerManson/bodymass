import * as actionTypes from '../actionTypes';

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
