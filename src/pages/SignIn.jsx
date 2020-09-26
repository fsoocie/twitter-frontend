import React, {useState} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import ModalBlock from '../components/ModalBlock';

const useStyles = makeStyles(theme => createStyles({
  wrapper: {
    display: 'flex',
    height: '100vh'
  },
  blueSide: {
    position: 'relative',
    background: '#71C9F8',
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  whiteSide: {
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteSideWrapper: {
    width: 380,
  },
  whiteSideTitle: {
    fontSize: 30,
    fontWeight: 700,
    marginBottom: 60,
  },
  whiteSideTwitterIcon: {
    fontSize: 44,
  },
  blueSideListInfo: {
    position: 'relative',
    listStyle: 'none',
    width: 380,
    margin: 0,
    padding:0,
    '& h6': {
      fontWeight: 700,
      color: 'white',
      fontSize: 19,
    }
  },
  blueSideListInfoItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 40
  },
  blueSideListInfoIcon: {
    marginRight: 15,
    fontSize: 32,
    color: 'white',
  },
  blueSideBigIcon: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '46%',
    left: '70%',
    height: '170%',
    width: '170%'
  },
  registerBtn: {
    marginBottom: 6,
  },
  loginField: {
    marginBottom: theme.spacing(2)
  }
}))

const SignIn = () => {
  const classes = useStyles()
  const [visible, setVisible] = useState(null)
  const openSignIn = () => {
    setVisible('signIn')
  }
  const openSignUp = () => {
    setVisible('signUp')
  }
  const closeModalBlock = () => {
    setVisible(null)
  }
  return (<div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color='primary' className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <SearchIcon className={classes.blueSideListInfoIcon} />
            <Typography variant='h6'>
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <PeopleIcon className={classes.blueSideListInfoIcon} />
            <Typography variant='h6'>
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <MessageIcon className={classes.blueSideListInfoIcon} />
            <Typography variant='h6'>
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.whiteSide}>
        <div className={classes.whiteSideWrapper}>
          <TwitterIcon className={classes.whiteSideTwitterIcon} color='primary' />
          <Typography className={classes.whiteSideTitle}>Узнайте, что происходит в мире прямо сейчас</Typography>
          <Typography style={{marginBottom: 14, fontSize: 14}}><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
          <Button onClick={openSignUp} style={{marginBottom: 14}} variant='contained' color='primary' fullWidth >Зарегистрироваться</Button>
          <Button onClick={openSignIn} variant='outlined' color='primary' fullWidth >Войти</Button>
        </div>
      </section>
    <ModalBlock
      title="Войти в Твиттер"
      visible={visible === 'signIn'}
      onClose={closeModalBlock}
      >
        <TextField
          className={classes.loginField}
          autoFocus
          fullWidth
          variant='filled'
          InputLabelProps={{shrink: true}}
          label='E-mail'
          type='email'
          id='email'
        />
        <TextField
          className={classes.loginField}
          id="password"
          label="Пароль"
          InputLabelProps={{shrink: true}}
          variant="filled"
          type="password"
          fullWidth
        />
      <DialogActions>
        <Button variant="contained" color="primary" fullWidth>
          Войти
        </Button>
      </DialogActions>
    </ModalBlock>

    <ModalBlock
      visible={visible === 'signUp'}
      title='Создайте учетную запись'
      onClose={closeModalBlock}
    >
      <TextField
        className={classes.loginField}
        autoFocus
        fullWidth
        variant='filled'
        InputLabelProps={{shrink: true}}
        label='Имя'
        type='text'
        id='name'
      />
      <TextField
        className={classes.loginField}
        autoFocus
        fullWidth
        variant='filled'
        InputLabelProps={{shrink: true}}
        label='E-mail'
        type='email'
        id='email'
      />
      <TextField
        className={classes.loginField}
        id="password"
        label="Пароль"
        InputLabelProps={{shrink: true}}
        variant="filled"
        type="password"
        fullWidth
      />
      <DialogActions>
        <Button variant="contained" color="primary" fullWidth>
          Далее
        </Button>
      </DialogActions>
    </ModalBlock>

    </div>);
};

export default SignIn;
