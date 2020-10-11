import {LoadingState, TweetState} from './contracts/state';
import {
  FetchTweetDataActionInterface,
  SetTweetDataActionInterface,
  SetTweetLoadingStateActionInterface,
  TweetActionsType
} from './contracts/actionCreators';


export const setTweetData = (payload: TweetState['tweetData']): SetTweetDataActionInterface => ({
  type: TweetActionsType.SET_TWEET_DATA,
  payload,
});

export const setTweetLoadingState = (
  payload: LoadingState,
): SetTweetLoadingStateActionInterface => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTweetData = (payload: string): FetchTweetDataActionInterface => ({
  type: TweetActionsType.FETCH_TWEET_DATA,
  payload
});

