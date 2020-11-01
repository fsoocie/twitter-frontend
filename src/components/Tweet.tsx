import React from 'react';
import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert'

import {Avatar, IconButton, MenuItem, Paper, Typography, Menu} from '@material-ui/core';
import { useHomeStyles } from '../pages/Home/theme';
import { Link } from 'react-router-dom';
import {formatDate} from "../utils/formatDate";

interface Tweet {
  _id: string;
  text: string;
  createdAt: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

interface TweetProps {
  tweet: Tweet;
  classes: ReturnType<typeof useHomeStyles>;
}

const ITEM_HEIGHT = 48

export const Tweet: React.FC<TweetProps> = ({
  tweet,
  classes,
}: TweetProps): React.ReactElement => {
  const {user, text, createdAt} = tweet

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: any) => {
    event.preventDefault()
    setAnchorEl(null);
  };

  return (
    <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
      <Link style={{width: '100%'}} to={`/home/tweet/${tweet._id}`}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя ${user.fullname}`}
          src={user.avatarUrl}
        />
        <div style={{width: '100%'}}>
          <div className={classes.tweetHeader}>
            <Typography>
              <b>{user.fullname}</b>&nbsp;
              <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
              <span className={classes.tweetUserName}>·</span>&nbsp;
              <span className={classes.tweetUserName}>{formatDate(new Date(createdAt))}</span>
            </Typography>

            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              }}
            >
              <MenuItem onClick={handleClose}>
                Редактировать
              </MenuItem>

              <MenuItem onClick={handleClose}>
                Удалить
              </MenuItem>
            </Menu>
          </div>

          <Typography variant="body1" gutterBottom>
            {text}
          </Typography>

          <div className={classes.tweetFooter}>
            <div>
              <IconButton>
                <CommentIcon style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <RepostIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <LikeIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <ShareIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </Link>
    </Paper>
  )
}
