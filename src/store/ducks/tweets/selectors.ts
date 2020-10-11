import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingState, TweetsState, AddTweetsState } from './contracts/state';

export const selectTweets = (state: RootState): TweetsState => state.tweets;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTweets(state).loadingState;

export const selectIsTweetsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectAddTweetState = (state: RootState): AddTweetsState =>
  selectTweets(state).addTweetsState

export const isAddTweetStateLoading = (state: RootState): boolean =>
  selectAddTweetState(state) === AddTweetsState.LOADING

export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items);
