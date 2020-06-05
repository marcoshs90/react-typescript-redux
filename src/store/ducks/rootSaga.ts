import { all, takeLatest } from 'redux-saga/effects';

import { ListsTypes } from './lists/types';
import { load } from './lists/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(ListsTypes.LOAD_REQUEST, load),
  ]);
}