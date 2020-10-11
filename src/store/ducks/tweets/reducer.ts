import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionsType } from './actionCreators';
import { LoadingState, TweetsState, AddTweetsState } from './contracts/state';

const initialTweetsState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
  addTweetsState: AddTweetsState.LOADED,
};

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
  switch (action.type) {
    case TweetsActionsType.SET_TWEETS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case TweetsActionsType.FETCH_TWEETS:
      draft.items = [];
      draft.loadingState = LoadingState.LOADING;
      break;

    case TweetsActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;


    case TweetsActionsType.FETCH_ADD_TWEET:
      draft.addTweetsState = AddTweetsState.LOADING
      break

    case TweetsActionsType.ADD_TWEET:
      draft.items.push(action.payload)
      break

    case TweetsActionsType.SET_ADD_TWEETS_STATE:
      draft.addTweetsState = action.payload
      break

    default:
      break;
  }
}, initialTweetsState);
