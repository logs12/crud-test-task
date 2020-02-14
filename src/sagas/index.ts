import { all, fork } from 'redux-saga/effects';
import { watchForUsers } from 'sagas/UserSaga';

export const rootSaga = function* root() {
    yield all([fork(watchForUsers)]);
}