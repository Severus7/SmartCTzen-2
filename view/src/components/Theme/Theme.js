import { createTheme, makeStyles } from "@material-ui/core/styles";

const neumorphicWhite = "#f0f0f3";
const neumorphicOrange = "#ff5039";

const theme = createTheme({
    palette: {
        primary: {
            main: `${neumorphicWhite}`,
        },
        secondary: {
            main: `${neumorphicOrange}`,
        }
    },
    typography: {
        fontFamily: 'Raleway',
    }
});

theme.props = {
    MuiFormLabel: {
        focused: false,
    },
}

theme.overrides = {
    MuiAppBar: {
        root: {
            color: 'primary',
            boxShadow: '10px 10px 30px rgba(174, 174, 192, 0.4)',
            borderRadius: '0px 0px 40px 40px',
            justifyContent: 'center',
            padding: '13px'
        },
    },
    MuiTabs: {
        root: {
            marginLeft: "auto",
        }
    },
    MuiTab: {
        root: {
            textTransform: 'none',
            color: "#000",
            marginLeft: "25px",
            "&:active": {
              color: "#ff5039"
            },
            "&:hover": {
              color: "#ff5039"
            }
        },
    },
    MuiPaper: {
        root: {
            backgroundColor: `${neumorphicWhite}`,
            padding: '2em',
        },
        rounded: {
            borderRadius: '22px'   
        },
        outlined: {
            outline: 'none'
        },
        elevation1: {
            boxShadow: '10px 10px 30px rgba(174, 174, 192, 0.4), -10px -10px 30px #FFFFFF',
        }
    },
    MuiTextField: {
        root: {
            backgroundColor: 'primary',
            boxShadow: 'inset -10px -10px 10px rgba(255, 255, 255, 0.7), inset 10px 10px 10px rgba(174, 174, 192, 0.2)',
            borderRadius: '13px',
            outline: 'none',
        },
    },
    MuiFormLabel: {
        filled: {
            color: 'primary'
        }
    },
    MuiButton: {
        root: {
            textTransform: 'none'
        },
        contained: {
            boxShadow: '-10px -10px 30px #FFFFFF, 10px 10px 30px rgba(174, 174, 192, 0.4)',
            borderRadius: '30px',
            padding: '9px',
            width: '150px',
            textTransform: 'none'
        }
    },
    MuiDrawer: {
        root: {
            backgroundColor: 'secondary'
        },
    },
    MuiSelect: {
        root: {
            backgroundColor: 'primary',
            boxShadow: 'inset -10px -10px 10px rgba(255, 255, 255, 0.7), inset 10px 10px 10px rgba(174, 174, 192, 0.2)',
            borderRadius: '13px',
            outline: 'none',
        },
    },
    MuiAutocomplete: {
        root: {
            border: 'none',
            outline: 'none'
        }
    }
}

export default theme;