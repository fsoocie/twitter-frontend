import {call, put, takeLatest} from 'redux-saga/effects';
import {authApi} from '../../../services/api/authApi';
import {
  UserActionsType
} from "./contracts/actionCreators";
import { setUserData, setUserLoadingStatus } from './actionCreators';
import { LoadingStatus } from '../../types';
import {FetchSignInActionInterface} from "./contracts/actionCreators";

function* fetchSignIn({payload}: FetchSignInActionInterface) {
  try {
    const data = yield call(authApi.signIn, payload);
    window.localStorage.setItem('token', data.data.token)
    yield put(setUserData(data));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignIn);
}
