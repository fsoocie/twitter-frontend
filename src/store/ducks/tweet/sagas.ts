import {call, put, takeLatest} from 'redux-saga/effects';
import {TweetsApi} from '../../../services/api/tweetsApi';
import {addTweet, setAddTweetState, setTweetData, setTweetLoadingState} from './actionCreators';
import {AddTweetState, LoadingState, TweetState} from './contracts/state';
import {
  FetchAddTweetActionInterface,
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

function* fetchAddTweetRequest({payload: text}: FetchAddTweetActionInterface) {
  try {
    const newTweetData: TweetState['tweetData'] = {
      _id: Math.random().toString(36).substr(2),
      text,
      user: {
        avatarUrl: 'https://source.unsplash.com/user/erondu/1600x900',
        fullname: 'Andrey Siletskiy',
        username: 'fsoocie'
      }
    }
    const tweetData = yield call(TweetsApi.addTweet, newTweetData )
    yield put(addTweet(tweetData))
    yield put(setAddTweetState(AddTweetState.LOADED))
  }
  catch (error) {
    yield put(setAddTweetState(AddTweetState.ERROR))
  }
}

export function* tweetSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetRequest);
  yield takeLatest(TweetActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}
