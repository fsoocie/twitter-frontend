import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(29, 161, 242)',
      dark: 'rgb(26, 145, 218)',
      contrastText: 'fff'
    },
    secondary: {
      main: 'rgb(26, 145, 218)',
    },
    error: {
      main: red.A400
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 30,
        fontSize: 14,
        textTransform: 'none',
        height: 40,
        fontWeight: 600
      },
      contained: {
        boxShadow: 'none',
        color: 'white',
        '&:hover': {
          boxShadow: 'none',
        }
      }
    },
    MuiFilledInput: {
      underline: {
        '&:after': {
          borderBottomWidth: '2px',
        },
        '&:before': {
          borderColor: '#aaa',
          borderBottomWidth: '2px',
        },
      },
      input: {
        backgroundColor: 'rgb(245, 248, 250)',
      }
    },
    MuiDialog: {
      paper: {
        borderRadius: 15,
      },
    },
    MuiDialogActions: {
      root: {
        marginBottom: 8,
      },
    },
    MuiDialogTitle: {
      root: {
        borderBottom: '1px solid rgb(204, 214, 221)',
        marginBottom: 10,
        padding: '10px 15px',
        '& h2': {
          display: 'flex',
          alignItems: 'center',
          fontWeight: 800,
        },
        '& button': {
          padding: 8,
          marginRight: 20,
        },
      },
    },
  }
})
