import {takeLatest} from 'redux-saga/effects';
import {signInRequest, signOutRequest} from './auth.saga';
import {authTypes} from '../type/auth.type';

function* rootSaga() {
  yield takeLatest(authTypes.SIGN_IN_REQUEST, signInRequest);
  yield takeLatest(authTypes.SIGN_OUT_REQUEST, signOutRequest);
}

export default rootSaga;
