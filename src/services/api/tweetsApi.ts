import axios from 'axios';
import { TweetsState } from '../../store/ducks/tweets/contracts/state';
import {TweetData, TweetState} from "../../store/ducks/tweet/contracts/state";

export const TweetsApi = {
  fetchTweets(): Promise<TweetsState['items']> {
    return axios.get('/tweets').then(({ data }) => data);
  },
  fetchTweet(_id: string): Promise<TweetData> {
    return axios.get(`/tweets?_id=${_id}`).then(({data}) => data)
  },
  addTweet(tweetData: TweetState['tweetData']): Promise<TweetData> {
    return axios.post('/tweets', tweetData)
  }
};
