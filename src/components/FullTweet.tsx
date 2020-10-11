import React, {useEffect} from 'react';
import {Tweet} from "./Tweet";
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {useHomeStyles} from "../pages/Home/theme";
import {selectIsTweetLoading, selectTweetData} from "../store/ducks/tweet/selectors";
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import {fetchTweetData, setTweetData} from "../store/ducks/tweet/actionCreators";
import classNames from "classnames";
import {Avatar, IconButton, Paper, Typography} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepostIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const classes = useHomeStyles()
  const {_id}: {_id?: string} = useParams()
  const dispatch = useDispatch()
  const tweetData = useSelector(selectTweetData)
  const isLoading = useSelector(selectIsTweetLoading)
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
        <Paper className={classes.fullTweet}>
            <div style={{display: 'flex'}}>
              <Avatar
                className={classes.tweetAvatar}
                style={{marginRight: 12}}
                alt={`Аватарка пользователя ${tweetData.user.fullname}`}
                src={tweetData.user.avatarUrl}
              />
              <Typography className={classes.fullTweetUserDescribe}>
                <b style={{fontSize: 15}}>{tweetData.user.fullname}</b>
                <span className={classes.tweetUserName}>@{tweetData.user.username}</span>
              </Typography>
            </div>
            <Typography className={classes.fullTweetText}>
              {tweetData.text}
            </Typography>
        </Paper>
      </div>
    );
  }

  return null
};
