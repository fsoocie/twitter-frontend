import React, {useEffect, useRef} from 'react';
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {ModalBlock} from "../../../components/ModalBlock";
import {useStylesSignIn} from '../theme';
import {Controller, useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {Notification} from "../../../components/Notification";
import {Color} from "@material-ui/lab/Alert/Alert";
import {useDispatch, useSelector} from "react-redux";
import {selectLoadingStatus, selectUserData} from "../../../store/ducks/user/selectors";
import {LoadingStatus} from "../../../store/types";
import {fetchSignIn} from "../../../store/ducks/user/actionCreators";


interface ILoginModalProps {
  open: boolean
  onClose: () => void
}

export interface ILoginFormProps {
  email: string,
  password: string
}

const LoginModalSchema = yup.object().shape({
  email: yup.string().email('Неверный E-mail').required('Введите E-mail'),
  password: yup.string().min(6, 'Минимальная длина пароля - 6 символов').required('Введите пароль'),
});

const LoginModal: React.FC<ILoginModalProps> = ({open, onClose}) => {

  const classes = useStylesSignIn()

  const dispatch = useDispatch()
  const loadingStatus = useSelector(selectLoadingStatus)
  const openNotificationRef = useRef<(text: string, type: Color) => void>(() => {})

  const {control, handleSubmit, errors} = useForm<ILoginFormProps>({
    resolver: yupResolver(LoginModalSchema)
  });

  const onSubmit = async (loginFormProps: ILoginFormProps) => {
    dispatch(fetchSignIn(loginFormProps))
  };

  useEffect(() => {
    if (loadingStatus === LoadingStatus.SUCCESS) {
      openNotificationRef.current('Авторизация прошла успешно!', 'success')
      onClose()
    } else if (loadingStatus === LoadingStatus.ERROR) {
      openNotificationRef.current('Неверный логин или пароль', 'error')
    }

  }, [loadingStatus])

  return (
    <Notification>
      {openNotification => {
        openNotificationRef.current = openNotification
        return (
        <ModalBlock
        visible={open}
        onClose={onClose}
        classes={classes}
        title="Войти в аккаунт">
        <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
        <FormGroup aria-label="position" row>

        <Controller
        as={TextField}
        name="email"
        control={control}
        defaultValue=""
        className={classes.loginSideField}
        id="email"
        label="E-Mail"
        InputLabelProps={{
        shrink: true,
      }}
        variant="filled"
        type="email"
        error={!!errors.email}
        helperText={errors.email?.message}
        autoFocus
        fullWidth
        />

        <Controller
        as={TextField}
        name='password'
        control={control}
        className={classes.loginSideField}
        id="password"
        label="Пароль"
        InputLabelProps={{
        shrink: true,
      }}
        variant="filled"
        type="password"
        defaultValue=""
        error={!!errors.password}
        helperText={errors.password?.message}
        fullWidth
        />

        <Button type='submit' variant="contained" color="primary" fullWidth>
        Войти
        </Button>
        </FormGroup>
        </FormControl>
        </form>
        </ModalBlock>
        )}}
    </Notification>
  );
};

export default LoginModal;
