import produce, {Draft} from 'immer';
import { LoadingState, TweetState} from './contracts/state';
import {TweetActions, TweetActionsType} from './contracts/actionCreators';

const initialTweetState: TweetState = {
  tweetData: undefined,
  loadingState: LoadingState.NEVER,
};

export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetActions) => {
  console.log(action.type)
  switch (action.type) {
    case TweetActionsType.SET_TWEET_DATA:
      draft.tweetData = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case TweetActionsType.FETCH_TWEET_DATA:
      draft.tweetData = undefined;
      draft.loadingState = LoadingState.LOADING;
      break;

    case TweetActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;

    default:
      break;
  }
}, initialTweetState);
