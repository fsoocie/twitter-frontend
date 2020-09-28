import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Container, createStyles} from "@material-ui/core";
import {HomeSideMenu} from "../components/HomeSideMenu";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {TweetsHeader} from "../components/TweetsHeader";
import {Tweet} from "../components/Tweet";

export const useHomeStyles = makeStyles(theme => createStyles({
    sideMenuList: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    sideMenuListItemBtn: {
      borderRadius: 30,
      height: 50,
      paddingRight: 32,
      paddingLeft: 8,
      color: '#202002'
    },
    sideMenuListItem: {
      marginBottom: 8,
      width: 230,
      cursor: 'pointer',
      '&:hover': {
        '& button' : {
          backgroundColor: '#E8F5FE',
          color: '#1DA1F2'
        },
      }
    },
    sideMenuListItemLabel: {
      fontWeight: 700,
      fontSize: 19,
      marginLeft: 15,
    },
    sideMenuGeneralIcon: {
      fontSize: '32px',
      '&:hover': {
        backgroundColor: '#E8F5FE'
      }
    },
    sideMenuListItemIcon: {
      fontSize: 28
    },
    sideMenuListButton: {
      padding: theme.spacing(3.2),
      marginTop: theme.spacing(2),
      width: 230
    },
    tweets: {
      minHeight: '100vh',
      borderTop: '0'
    },
    tweetsHeader: {
      borderRadius: 0,
      border: '0',
      padding: '14px 15px',
      '& h6': {
        fontWeight: 800,
        color: '#202002',
        fontSize: 18
      }
    },
    tweet: {
      borderLeft: 0,
      borderRight: 0,
      padding: '15px 5px 10px 20px',
      borderRadius: 0,
      '&:hover': {
        backgroundColor: '#F5F8FA'
      }
    },
    tweetUserName: {
      color: '#8695A1',
      fontSize: 15
    },
    tweetBody: {
      color: '#14171A',
      fontSize: 15,
      marginBottom: 7
    },
    tweetFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      width: 450,
      '& svg': {
        fontSize: 19,
      },
    },
    tweetFooterItem: {
      display: 'flex',
      alignItems: 'center',
      color: 'rgb(101, 119, 134)',
      cursor: 'pointer',
      transitionDuration: '0.15s',
      '& button': {
        padding: 8
      }
    },
    tweetFooterItemLabel: {
      marginLeft: 6,
      fontSize: 13
    },
    tweetFooterItemMessage: {
      '&:hover': {
        color: '#35AAF3',
        '& button': {
          backgroundColor: '#DFEFFA',
          color: '#35AAF3'
        }
      },
    },
    tweetFooterItemRepeat: {
      '&:hover': {
        color: '#3CC87C',
        '& button': {
          backgroundColor: '#DEF2EB',
          color: '#3CC87C'
        }
      },
    },
    tweetFooterItemLike: {
      '&:hover': {
        color: '#E12F66',
        '& button': {
          backgroundColor: '#F3E3EB',
          color: '#E12F66'
        }
      },
    },
    tweetFooterItemShare: {
      '&:hover': {
        '& button': {
          backgroundColor: '#DFEFFA',
          color: '#35AAF3'
        }
      },
    }
  }
))

export const Home: React.FC = () => {
  const classes = useHomeStyles()

  return (
    <Container maxWidth='lg'>
      <Grid container >
        <Grid item xs={3}>
          <HomeSideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweets} variant="outlined">
            <TweetsHeader classes={classes}/>
            <Tweet classes={classes} user={{username: 'chern_ov', fullname: 'Егор Чернов', imageUrl: 'https://images.unsplash.com/photo-1601219992101-9c6430278e68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}} text='на данный момент мне не хватает заботливой бабуленьки, которая укроет меня мягеньким пледиком и принесет в постельку компотик с плюшками' />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
