import { put, call, fork } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import * as userActions from './userActions';
import * as actionTypes from '../actionTypes';
import Api from '../../../common/Api';

const api = new Api();

// Workers
export function * auth () {
  try {
    const user = yield call(api.me);
    yield put(userActions.authSuccess(user));
  } catch (err) {
    yield put(userActions.authFail(err));
  }
}

export function * logout () {
  console.debug('logging out...');
  try {
    yield call(api.logout);
    yield put(userActions.logoutSuccess());
    window.location.href = '/';
  } catch (err) {
    yield put(userActions.authFail(err));
  }
}

// Watchers
export function * watchAuth () {
  yield takeLatest(actionTypes.AUTH_REQUEST, auth);
}

export function * watchLogout () {
  yield takeLatest(actionTypes.LOGOUT_REQUEST, logout);
}

export default function * () {
  yield [
    fork(watchAuth),
    fork(watchLogout)
  ];
}
