import React from 'react';
import {IconButton} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import MessageIcon from "@material-ui/icons/MailOutline";
import BookmarkIcon from "@material-ui/icons/TurnedInNot";
import ListIcon from "@material-ui/icons/ListAlt";
import PersonIcon from "@material-ui/icons/PermIdentity";
import Button from "@material-ui/core/Button";
import { useHomeStyles } from '../pages/Home';

interface IHomeSideMenu {
  classes: ReturnType<typeof useHomeStyles>
}

export const HomeSideMenu: React.FC<IHomeSideMenu> = ({classes}) => {
  return (
    <ul className={classes.sideMenuList}>
      <li >
        <IconButton color='primary' >
          <TwitterIcon className={classes.sideMenuGeneralIcon} />
        </IconButton>
      </li>
      <li className={classes.sideMenuListItem}>
        <IconButton className={classes.sideMenuListItemBtn}>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>Поиск</Typography>
        </IconButton>
      </li>
      <li className={classes.sideMenuListItem}>
        <IconButton className={classes.sideMenuListItemBtn}>
          <NotificationIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>Уведомления</Typography>
        </IconButton>
      </li>
      <li className={classes.sideMenuListItem}>
        <IconButton className={classes.sideMenuListItemBtn}>
          <MessageIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>Сообщения</Typography>
        </IconButton>
      </li>
      <li className={classes.sideMenuListItem}>
        <IconButton className={classes.sideMenuListItemBtn}>
          <BookmarkIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>Закладки</Typography>
        </IconButton>
      </li>
      <li className={classes.sideMenuListItem}>
        <IconButton className={classes.sideMenuListItemBtn}>
          <ListIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>Список</Typography>
        </IconButton>
      </li>
      <li className={classes.sideMenuListItem}>
        <IconButton className={classes.sideMenuListItemBtn}>
          <PersonIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>Профиль</Typography>
        </IconButton>
      </li>
      <li>
        <Button className={classes.sideMenuListButton} variant='contained' color='primary' fullWidth>Твитнуть</Button>
      </li>
    </ul>
  );
};
