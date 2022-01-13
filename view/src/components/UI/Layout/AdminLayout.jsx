import React, { useState, useEffect} from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles, useTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  AppBar,
  Avatar,
  Divider,
  Drawer,
  IconButton,
  List,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import BusinessIcon from "@material-ui/icons/Business";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import { useHistory } from "react-router";
import theme from "../../Theme/Theme";
import axios from "axios";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#ff5039",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    backgroundColor: "#f0f0f3",
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerUI: {
    backgroundColor: "#f0f0f3",
  },
  drawerOpen: {
    backgroundColor: "#f0f0f3",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const AdminLayout = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const [privateData, setPrivateData] = useState();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  // useEffect(() => {
  //   if(!localStorage.getItem("token")) {
  //     history.push("/admin/login")
  //   }
  // }, [history]);

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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const firstNameZero = firstName.charAt(0);
  const lastNameZero = lastName.charAt(0);

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <ArrowForwardIosRoundedIcon />
          </IconButton>
          <Typography noWrap>SmartCTzen</Typography>
          <IconButton disableRipple style={{ marginLeft: "auto" }} onClick={handleMenu}>
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
              vertical: "top",
              horizontal: "right",
            }}
            open={openMenu}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/admin/profile" onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        PaperProps={{
          classes: {
            root: classes.drawerUI,
          },
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button component={Link} to="/admin/profile">
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItem>

          <ListItem button component={Link} to="/admin/proposals">
            <ListItemIcon>
              <EmojiEmotionsIcon />
            </ListItemIcon>
            <ListItemText>Proposals</ListItemText>
          </ListItem>

          <ListItem button component={Link} to="/admin/projects">
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText>Projects</ListItemText>
          </ListItem>

          <ListItem button component={Link} to="/admin/reports">
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText>Reports</ListItemText>
          </ListItem>

          <ListItem button component={Link} to="/admin/applicants">
            <ListItemIcon>
              <GroupAddRoundedIcon />
            </ListItemIcon>
            <ListItemText>Applicants</ListItemText>
          </ListItem>

          <ListItem button component={Link} to="/admin/citizens">
            <ListItemIcon>
              <GroupRoundedIcon />
            </ListItemIcon>
            <ListItemText>Citizens</ListItemText>
          </ListItem>

          <ListItem button component={Link} to="/admin/messages">
            <ListItemIcon>
              <ChatRoundedIcon />
            </ListItemIcon>
            <ListItemText>Messages</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};

export default AdminLayout;
