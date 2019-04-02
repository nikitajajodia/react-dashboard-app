import {
  take,
  fork,
  call,
  put,
} from 'redux-saga/effects';
import api from '../api';
import actionTypes from '../actions/actionTypes';

/**
 * fetch files - api call
 */
function* fetchFiles() {
  while (true) {
    yield take(actionTypes.FETCH_FILES);
    const response = yield call(api.get, '/users');
    if (response.status === 200) {
      yield put({
        type: actionTypes.FETCH_FILES_SUCCESS,
        ...response,
      });
    }
  }
}

export default function* () {
  yield fork(fetchFiles);
}
