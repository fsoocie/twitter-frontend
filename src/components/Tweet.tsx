import React from 'react';
import { useHomeStyles } from "../pages/Home";
import {Grid, Paper, Avatar, Typography, IconButton} from '@material-ui/core';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import RepeatIcon from '@material-ui/icons/Repeat';
import MessageIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/PublishOutlined';
import cn from 'classnames'

interface ITweet {
  classes: ReturnType<typeof useHomeStyles>
  text: string
  user: {
    fullname: string
    username: string
    imageUrl: string
  }
}

export const Tweet: React.FC<ITweet> = ({classes, text, user}) => {
  return (
    <Paper variant='outlined' className={classes.tweet}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar style={{height: '50px', width: '50px'}} alt={`${user.username} avatar`} src={user.imageUrl} />
        </Grid>
        <Grid style={{paddingLeft: '10px'}} item xs={10}>
          <div>
            <b style={{fontSize: '15px'}}>{user.fullname}</b> &nbsp;
            <span className={classes.tweetUserName}>@{user.username}  ·  </span>
            <span className={classes.tweetUserName}>25 сент.</span>
          </div>
          <Typography className={classes.tweetBody} variant="body1">
            {text}
          </Typography>
          <div className={classes.tweetFooter}>
            <div className={cn(classes.tweetFooterItem, classes.tweetFooterItemMessage)}>
              <IconButton>
                <MessageIcon />
              </IconButton>
              <span className={classes.tweetFooterItemLabel}>23</span>
            </div>
            <div className={cn(classes.tweetFooterItem, classes.tweetFooterItemRepeat)}>
              <IconButton>
                <RepeatIcon />
              </IconButton>
              <span className={classes.tweetFooterItemLabel}>55</span>
            </div>
            <div className={cn(classes.tweetFooterItem, classes.tweetFooterItemLike)}>
              <IconButton>
                <LikeIcon />
              </IconButton>
              <span className={classes.tweetFooterItemLabel}>2.9 тыс.</span>
            </div>
            <div className={cn(classes.tweetFooterItem, classes.tweetFooterItemShare)}>
              <IconButton>
                <ShareIcon />
              </IconButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
