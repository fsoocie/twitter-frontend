import { Action } from 'redux';
import {LoadingState, TweetState} from './contracts/state';

export enum TweetActionsType {
  SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
  FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
  SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
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

export type TweetActions =
  | SetTweetDataActionInterface
  | FetchTweetDataActionInterface
  | SetTweetLoadingStateActionInterface;
