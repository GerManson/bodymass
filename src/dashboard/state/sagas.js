import { fork } from 'redux-saga/effects';
import userSagas from './user/userSagas';

export default function * () {
  yield [
    fork(userSagas)
  ];
}
