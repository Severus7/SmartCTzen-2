import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import useStyles from "../../components/Theme/Styles";
import theme from "../../components/Theme/Theme";

const OtherMessage = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item md={8} sm={12} xs={12}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>J</Avatar>
          </ListItemAvatar>
          <ListItemText
            className={classes.otherMessage}
            primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </ListItem>
      </Grid>
    </Grid>
  );
};

const OwnMessage = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="flex-end">
      <Grid item>
        <ListItem>
          <ListItemText className={classes.ownMessage} primary="Hi it's me" />
        </ListItem>
      </Grid>
    </Grid>
  );
};

const AdminMessages = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container spacing={5}>
          <Grid item sm={3} xs={3}>
            <Box className={classes.conversationsPanel}>
              <List>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar>J</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Joshua Saps" />
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar>J</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Joshua Saps" />
                </ListItem>
              </List>
            </Box>
          </Grid>

          <Grid item sm={8} xs={8}>
            <Typography>Chat box here</Typography>
            <List>
              <OtherMessage />
              <OtherMessage />
              <OtherMessage />
              <OtherMessage />
              <OwnMessage />
              <OwnMessage />
              <OwnMessage />
              <OwnMessage />
            </List>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default AdminMessages;
