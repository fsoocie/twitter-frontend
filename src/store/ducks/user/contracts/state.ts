import {LoadingStatus} from "../../../types";

export interface UserData {
  _id?: string;
  email: string;
  fullname: string;
  username: string;
  password: string;
  confirmed?: boolean;
  confirmHash: string;
  website?: string;
  location?: string;
  about?: string;
}

export interface UserState {
  data: UserData | undefined;
  loadingStatus: LoadingStatus;
}
