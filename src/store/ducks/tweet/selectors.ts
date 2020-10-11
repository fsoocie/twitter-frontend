import {createSelector} from 'reselect';
import {RootState} from '../../store';
import {AddTweetState, LoadingState, TweetState} from './contracts/state';

export const selectTweet = (state: RootState): TweetState => state.tweet;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTweet(state).loadingState;

export const selectIsTweetLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectAddTweetState = (state: RootState): AddTweetState =>
  selectTweet(state).addTweetState

export const isAddTweetStateLoading = (state: RootState): boolean =>
  selectAddTweetState(state) === AddTweetState.LOADING

export const selectTweetData = createSelector(selectTweet, (tweet) => tweet.tweetData);
