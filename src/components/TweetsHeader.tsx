import React from 'react';
import {useHomeStyles} from "../pages/Home";
import {Paper, Typography} from '@material-ui/core';

interface ITweetsHeader {
  classes: ReturnType<typeof useHomeStyles>
}

export const TweetsHeader: React.FC<ITweetsHeader> = ({classes}) => {
  return (
    <Paper variant="outlined" className={classes.tweetsHeader}>
      <Typography variant='h6'>Главная</Typography>
    </Paper>
  );
}
