export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface TweetData {
  _id: string;
  text: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export interface TweetState {
  tweetData: TweetData | undefined;
  loadingState: LoadingState;
}
