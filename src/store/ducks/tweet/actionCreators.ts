import {AddTweetState, LoadingState, TweetState} from './contracts/state';
import {
  AddTweetActionInterface,
  FetchAddTweetActionInterface,
  FetchTweetDataActionInterface,
  SetAddTweetState,
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

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
  type: TweetActionsType.FETCH_ADD_TWEET,
  payload
})

export const addTweet = (payload: TweetState['tweetData']): AddTweetActionInterface => ({
  type: TweetActionsType.ADD_TWEET,
  payload
})

export const setAddTweetState = (payload: AddTweetState): SetAddTweetState => ({
  type: TweetActionsType.SET_ADD_TWEET_STATE,
  payload
})
