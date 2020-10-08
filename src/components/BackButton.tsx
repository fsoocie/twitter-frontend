import React from 'react';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {IconButton} from "@material-ui/core";
import { useHistory } from 'react-router-dom';

export const BackButton = () => {
  const history = useHistory()
  return (
    <IconButton size='small' onClick={history.goBack} color='primary'>
      <ArrowBackIcon />
    </IconButton>
  );
};
