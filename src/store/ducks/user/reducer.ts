import produce, {Draft} from 'immer';
import {UserState} from './contracts/state';
import {UserActions, UserActionsType} from './contracts/actionCreators';
import { LoadingStatus } from '../../types';

const initialUserState: UserState = {
  data: undefined,
  loadingStatus: LoadingStatus.NEVER,
};

export const userReducer = produce((draft: Draft<UserState>, action: UserActions) => {
  switch (action.type) {
    case UserActionsType.SET_USER_DATA:
      draft.data = action.payload;
      draft.loadingStatus = LoadingStatus.SUCCESS;
      break;

    case UserActionsType.FETCH_SIGN_IN:
      draft.data = undefined;
      draft.loadingStatus = LoadingStatus.LOADING;
      break;

    case UserActionsType.SET_LOADING_STATUS:
      draft.loadingStatus = action.payload;
      break;

    default:
      break;
  }
}, initialUserState);
