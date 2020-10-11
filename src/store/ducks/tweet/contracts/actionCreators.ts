import {Action} from "redux";
import {AddTweetState, LoadingState, TweetState} from "./state";

export enum TweetActionsType {
  SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
  FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
  SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
  FETCH_ADD_TWEET = 'tweet/FETCH_ADD_TWEET',
  ADD_TWEET = 'tweet/ADD_TWEET',
  SET_ADD_TWEET_STATE = 'tweet/SET_ADD_TWEET_STATE',
}

export interface SetTweetDataActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_TWEET_DATA;
  payload: TweetState['tweetData'];
}

export interface FetchTweetDataActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_TWEET_DATA;
  payload: string
}

export interface SetTweetLoadingStateActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface FetchAddTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_ADD_TWEET;
  payload: string
}

export interface AddTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.ADD_TWEET
  payload: TweetState['tweetData']
}

export interface SetAddTweetState extends Action<TweetActionsType> {
  type: TweetActionsType.SET_ADD_TWEET_STATE
  payload: AddTweetState
}

export type TweetActions =
  | SetTweetDataActionInterface
  | FetchTweetDataActionInterface
  | SetTweetLoadingStateActionInterface
  | FetchAddTweetActionInterface
  | AddTweetActionInterface
  | SetAddTweetState
