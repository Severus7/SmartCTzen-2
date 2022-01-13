import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../Theme/Theme';

const Header = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position='fixed'>
                <Toolbar>{props.children}</Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;