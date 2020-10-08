import React, {useEffect} from 'react';
import {Tweet} from "./Tweet";
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {useHomeStyles} from "../pages/Home/theme";
import {selectIsTweetLoading, selectTweetData} from "../store/ducks/tweet/selectors";
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import {fetchTweetData, setTweetData} from "../store/ducks/tweet/actionCreators";

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const classes = useHomeStyles()
  const {_id}: {_id?: string} = useParams()
  const dispatch = useDispatch()
  const tweetData = useSelector(selectTweetData)
  const isLoading = useSelector(selectIsTweetLoading)
  console.log(tweetData)
  useEffect(() => {
    if (_id) {
      dispatch(fetchTweetData(_id))
    }
    return () => {
      setTweetData(undefined)
    }
  }, [dispatch, _id])

  if (isLoading) {
    return (
    <div className={classes.tweetsCentred}>
      <CircularProgress />
    </div>
    )
  }

  if (tweetData) {
    return (
      <div>
        <Tweet tweet={tweetData} classes={classes} />
      </div>
    );
  }

  return null
};
