import { fork } from 'redux-saga/effects';
import userSagas from './user/userSagas';
import bmiSagas from './bmi/bmiSagas';

export default function * () {
  yield [
    fork(userSagas),
    fork(bmiSagas)
  ];
}
