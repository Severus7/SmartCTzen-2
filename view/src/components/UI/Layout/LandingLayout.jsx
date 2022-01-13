import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Tabs,
  Tab,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  SwipeableDrawer,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Header from "../Header/Header";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "7em",
  },
  drawerIconContainer: {
      marginLeft: "auto",
      "&:hover": {
          backgroundColor: "transparent"
      }
  },
  drawerIcon: {
      height: "37px",
      width: "37px",
      color: "#000"
  },
  drawer: {
    backgroundColor: '#f0f0f3'
  },
}));

const LandingLayout = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = (
    <React.Fragment>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary">
        <Tab component={Link} to="/" label="Home" />
        <Tab component={Link} to="/features" label="Features" />
        <Tab component={Link} to="/login" label="Login" />
      </Tabs>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
        <SwipeableDrawer
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            anchor="right"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            onOpen={() => setOpenDrawer(true)}
            PaperProps={{
                classes: {
                    root: classes.drawer
                }
            }}
        >
            <List disablePadding={true}>
                <ListItem
                    onClick={() => {
                        setOpenDrawer(false);
                        setValue(0);
                    }}
                    button
                    component={Link}
                    to="/"
                    selected={value === 0}
                >
                    <ListItemText disableTypography>Home</ListItemText>
                </ListItem>
                <ListItem
                    onClick={() => {
                        setOpenDrawer(false);
                        setValue(1);
                    }}
                    button
                    component={Link}
                    to="/features"
                    selected={value === 1}
                >
                    <ListItemText disableTypography>Features</ListItemText>
                </ListItem>
                <ListItem
                    onClick={() => {
                        setOpenDrawer(false);
                        setValue(2);
                    }}
                    button
                    component={Link}
                    to="/login"
                    selected={value === 2}
                >
                    <ListItemText disableTypography>Login</ListItemText>
                </ListItem>
            </List>
        </SwipeableDrawer>
        <IconButton
            className={classes.drawerIconContainer}
            onClick={() => setOpenDrawer(!openDrawer)}
            disableRipple
        >
            <MenuIcon className={classes.drawerIcon} />
        </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Header>
        <Typography>SmartCTzen</Typography>
        {matches ? drawer : tabs}
      </Header>
      <div className={classes.toolbarMargin}></div>
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default LandingLayout;
