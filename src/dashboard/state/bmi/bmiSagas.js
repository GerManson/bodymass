import { put, call, fork } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import * as bmiActions from './bmiActions';
import * as actionTypes from '../actionTypes';
import Api from '../../../common/Api';

const api = new Api();

// Workers
export function * getBodyMassIndex ({mass, height}) {
  try {
    const bmi = yield call(api.calculateBMI, mass, height);
    yield put(bmiActions.bodyMassSuccess(bmi));
  } catch (err) {
    yield put(bmiActions.bodyMassFail(err));
  }
}

// Watchers
export function * watchBodyMassRequest () {
  yield takeLatest(actionTypes.BMI_REQUEST, getBodyMassIndex);
}

export default function * () {
  yield [
    fork(watchBodyMassRequest)
  ];
}
