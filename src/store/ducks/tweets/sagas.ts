import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { setTweets, setTweetsLoadingState, TweetsActionsType, FetchAddTweetActionInterface, setAddTweetState, addTweet } from './actionCreators';
import { LoadingState, AddTweetsState } from './contracts/state';

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

function* fetchAddTweetRequest({payload: text}: FetchAddTweetActionInterface) {
  try {
    /*const newTweetData: TweetState['tweetData'] = {
      _id: Math.random().toString(36).substr(2),
      text,
      user: {
        avatarUrl: 'https://source.unsplash.com/user/erondu/1600x900',
        fullname: 'AnhaSiletskiy',
        username: 'fsoocie'
      }
    }*/
    console.log("TEXT: " + text)
    const tweetData = yield call(TweetsApi.addTweet, text)
    console.log(tweetData)
    yield put(addTweet(tweetData))
    yield put(setAddTweetState(AddTweetsState.LOADED))
  }
  catch (error) {
    yield put(setAddTweetState(AddTweetsState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}
