import {RootState} from '../../store';
import {UserState} from './contracts/state';
import {LoadingStatus} from "../../types";

export const selectUserState = (state: RootState): UserState => state.user;

export const selectUserData = (state: RootState): UserState['data'] => selectUserState(state).data;

export const selectLoadingStatus = (state: RootState): LoadingStatus => selectUserState(state).loadingStatus;
