import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';
import api from '../../../services/api';
import { RepositoriesTypes } from './types';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const { data } = yield call(api.get, 'users/diego3g/repos');

    yield put(loadSuccess(data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default all([
  takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
]);
