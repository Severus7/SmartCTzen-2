import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Tabs,
  Tab,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  useMediaQuery,
  Menu,
  MenuItem
} from "@material-ui/core";
import axios from "axios";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Header from "../Header/Header";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "37px",
    width: "37px",
    color: "#000",
  },
  drawer: {
    backgroundColor: "#f0f0f3",
  },
}));

const CitizenLayout = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const openMenu = Boolean(anchorEl);

  const [privateData, setPrivateData] = useState();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get("/getMe", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setPrivateData(response.data.doc);

      setFirstName(response.data.doc.firstname);
      setLastName(response.data.doc.lastname);
    }

    sendRequest();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const firstNameZero = firstName.charAt(0);
  const lastNameZero = lastName.charAt(0);


  const tabs = (
    <React.Fragment>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary">
        <Tab component={Link} to="/citizen/profile" label="Profile" />
        <Tab component={Link} to="/citizen/proposals" label="Proposals" />
        <Tab component={Link} to="/citizen/projects" label="Projects" />
        <Tab component={Link} to="/citizen/reports" label="Reports" />
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
            root: classes.drawer,
          },
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
            to="/citizen/profile"
            selected={value === 0}
          >
            <ListItemText>Profile</ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            button
            component={Link}
            to="/citizen/proposals"
            selected={value === 1}
          >
            <ListItemText>Proposals</ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            button
            component={Link}
            to="/citizen/projects"
            selected={value === 2}
          >
            <ListItemText>Projects</ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            button
            component={Link}
            to="/citizen/reports"
            selected={value === 3}
          >
            <ListItemText>Reports</ListItemText>
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
        <IconButton disableRipple onClick={handleMenu} >
          <Avatar>{firstNameZero +  lastNameZero}</Avatar>
        </IconButton>
        <Menu 
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={openMenu}
          onClose={handleClose}
        >
          <MenuItem component={Link} to="/citizen/profile" onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Header>
      <div className={classes.toolbarMargin}></div>
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default CitizenLayout;
