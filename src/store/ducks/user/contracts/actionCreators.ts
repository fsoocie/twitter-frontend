import {Action} from "redux";
import {UserState} from "./state";
import { ILoginFormProps } from "../../../../pages/SignIn/components/LoginModal";
import {LoadingStatus} from "../../../types";

export enum UserActionsType {
  SET_USER_DATA = 'user/SET_USER_DATA',
  FETCH_SIGN_IN = 'tweet/FETCH_SIGN_IN',
  SET_LOADING_STATUS = 'tweet/SET_LOADING_STATUS',
}

export interface SetUserDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_USER_DATA;
  payload: UserState['data'];
}

export interface FetchSignInActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_IN;
  payload: ILoginFormProps
}

export interface SetUserLoadingStatusActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATUS;
  payload: LoadingStatus;
}

export type UserActions =
  | SetUserDataActionInterface
  | FetchSignInActionInterface
  | SetUserLoadingStatusActionInterface
