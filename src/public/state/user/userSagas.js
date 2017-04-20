import { put, call, fork } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import * as userActions from './userActions';
import * as actionTypes from '../actionTypes';
import Api from '../../../common/Api';

const api = new Api();

// Workers
export function * login ({ email, password }) {
  try {
    yield call(api.login, email, password);
    yield put(userActions.loginSuccess());
    window.location.href = '/';
  } catch (err) {
    yield put(userActions.loginFail(err));
  }
}

export function * recover ({ email }) {
  try {
    yield call(api.recover, email);
    yield put(userActions.recoverSuccess());
    window.location.href = '/';
  } catch (err) {
    yield put(userActions.recoverFail(err));
  }
}

export function * signup ({name, email, password, confirm}) {
  try {
    yield call(api.signup, name, email, password, confirm);
    yield put(userActions.signupSuccess());
    window.location.href = '/';
  } catch (err) {
    yield put(userActions.signupFail(err));
  }
}

// Watchers
function * watchLogin () {
  yield takeLatest(actionTypes.LOGIN_REQUEST, login);
}

function * watchRecover () {
  yield takeLatest(actionTypes.RECOVER_REQUEST, recover);
}

function * watchSignup () {
  yield takeLatest(actionTypes.SIGNUP_REQUEST, signup);
}

export default function * () {
  yield [
    fork(watchLogin),
    fork(watchRecover),
    fork(watchSignup)
  ];
}
