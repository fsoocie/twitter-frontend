import { Action } from 'redux';
import {LoadingState, TweetsState, Tweet, AddTweetsState} from './contracts/state';

export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
  FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
  ADD_TWEET = 'tweets/ADD_TWEET',
  SET_ADD_TWEETS_STATE = 'tweets/SET_ADD_TWEETS_STATE',
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: TweetsState['items'];
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_ADD_TWEET;
  payload: string
}

export interface AddTweetActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.ADD_TWEET
  payload: Tweet
}

export interface SetAddTweetsState extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_ADD_TWEETS_STATE
  payload: AddTweetsState
}

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export const setTweetsLoadingState = (
  payload: LoadingState,
): SetTweetsLoadingStateActionInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload
})

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
  type: TweetsActionsType.ADD_TWEET,
  payload
})

export const setAddTweetState = (payload: AddTweetsState): SetAddTweetsState => ({
  type: TweetsActionsType.SET_ADD_TWEETS_STATE,
  payload
})

export type TweetsActions =
  | SetTweetsActionInterface
  | FetchTweetsActionInterface
  | SetTweetsLoadingStateActionInterface
  | FetchAddTweetActionInterface
  | SetAddTweetsState
  | AddTweetActionInterface
