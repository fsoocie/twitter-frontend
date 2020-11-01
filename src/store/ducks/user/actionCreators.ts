import {UserState} from "./contracts/state";
import {
  UserActionsType,
  SetUserDataActionInterface,
  SetUserLoadingStatusActionInterface,
  FetchSignInActionInterface,
} from "./contracts/actionCreators";
import { LoadingStatus } from "../../types";
import {ILoginFormProps} from "../../../pages/SignIn/components/LoginModal";

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});

export const setUserLoadingStatus = (
  payload: LoadingStatus,
): SetUserLoadingStatusActionInterface => ({
  type: UserActionsType.SET_LOADING_STATUS,
  payload,
});

export const fetchSignIn = (payload: ILoginFormProps): FetchSignInActionInterface => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload
});

