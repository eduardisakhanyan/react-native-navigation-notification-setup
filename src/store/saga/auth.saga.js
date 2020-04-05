import {put} from 'redux-saga/effects';
import messaging from '@react-native-firebase/messaging';

import {authActions} from '../action/auth.action';

function* signInRequest(action) {
  try {
    /**
     * Log in Logic in progress....
     * Henc prcav pti token stananq vor@ notification xrgeluc ogtagorcvuma
     */
    const FCMToken = yield messaging().getToken();
    yield put(authActions.signInSuccess(action.name, FCMToken));
  } catch (e) {
    yield put(authActions.signInFailure());
  }
}

function* signOutRequest() {
  try {
    yield put(authActions.signOutSuccess());
  } catch (e) {
    yield put(authActions.signOutFailure());
  }
}

export {signInRequest, signOutRequest};
