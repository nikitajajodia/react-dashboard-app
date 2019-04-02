import {
  fork,
} from 'redux-saga/effects';

import Dashboard from './DashboardSaga';

export default function* root() {
  yield fork(Dashboard);
}
