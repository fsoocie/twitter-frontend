import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { setTweetData, setTweetLoadingState, TweetActionsType, FetchTweetDataActionInterface } from './actionCreators';
import {LoadingState} from './contracts/state';

export function* fetchTweetRequest({payload: tweetId}: FetchTweetDataActionInterface) {
  try {
    const tweetData = yield call(TweetsApi.fetchTweet, tweetId);
    debugger
    yield put(setTweetData(tweetData[0]));
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

export function* tweetSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetRequest);
}
