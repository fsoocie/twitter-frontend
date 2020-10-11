import {call, put, takeLatest} from 'redux-saga/effects';
import {TweetsApi} from '../../../services/api/tweetsApi';
import { setTweetData, setTweetLoadingState} from './actionCreators';
import { LoadingState} from './contracts/state';
import {
  FetchTweetDataActionInterface,
  TweetActionsType
} from "./contracts/actionCreators";

function* fetchTweetRequest({payload: tweetId}: FetchTweetDataActionInterface) {
  try {
    const tweetData = yield call(TweetsApi.fetchTweet, tweetId);
    yield put(setTweetData(tweetData[0]));
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

export function* tweetSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetRequest);
}
