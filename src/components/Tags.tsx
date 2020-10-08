import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider/Divider";
import {useHomeStyles} from "../pages/Home/theme";
import {useSelector} from "react-redux";
import {selectIsTagsLoaded, selectTagsItems} from '../store/ducks/tags/selectors';
import {Tag} from "../store/ducks/tags/contracts/state";
import { Link } from 'react-router-dom';

interface ITags {
  classes: ReturnType<typeof useHomeStyles>
}

export const Tags: React.FC<ITags> = ({classes}): React.ReactElement | null => {

  const isLoaded = useSelector(selectIsTagsLoaded)
  const items = useSelector(selectTagsItems)

  if (!isLoaded) {
    return null
  }

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Актуальные темы</b>
      </Paper>
      <List>
        {items.map((tag: Tag) => (
          <React.Fragment key={tag._id}>
            <Link to={`/home/search?q=${tag.name}`}>
            <ListItem className={classes.rightSideBlockItem}>
              <ListItemText
                primary={tag.name}
                secondary={
                  <Typography component="span" variant="body2" color="textSecondary">
                    Твитов: {tag.count}
                  </Typography>
                }
              />
            </ListItem>
            </Link>
            <Divider component="li"/>
          </React.Fragment>
          ))}
      </List>
    </Paper>
  );
};
