import React from "react";
import {
  Button,
  Container,
  Divider,
  IconButton,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import useStyles from "../../components/Theme/Styles";
import theme from "../../components/Theme/Theme";

const SuperAdminHome = (props) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Edit contents of Home page
        </Typography>
        <Divider style={{ marginBottom: "40px" }} />

        <Typography variant="h5" style={{ marginBottom: "20px" }}>
          Header
          <IconButton id="editHeader" aria-label="update header" type="button">
            <EditRoundedIcon fontSize="small" color="secondary" />
          </IconButton>
        </Typography>
        <Grid container spacing={3} style={{ marginBottom: "40px" }}>
          <Grid item sm={6} xs={12}>
            <TextField
              variant="outlined"
              label="Header Name"
              name="headerName"
              id="headerName"
              value="Edit this in backend"
              fullWidth
              disabled
              InputProps={{
                classes: {
                  notchedOutline: classes.input,
                },
              }}
              inputProps={{
                className: classes.input,
              }}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              variant="outlined"
              label="Tagline"
              name="tagline"
              id="tagline"
              value="Edit this in backend"
              fullWidth
              disabled
              InputProps={{
                classes: {
                  notchedOutline: classes.input,
                },
              }}
              inputProps={{
                className: classes.input,
              }}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              variant="outlined"
              label="Logo"
              name="logo"
              id="logo"
              value="Edit this in backend"
              fullWidth
              disabled
              InputProps={{
                classes: {
                  notchedOutline: classes.input,
                },
              }}
              inputProps={{
                className: classes.input,
              }}
            />
          </Grid>
        </Grid>
        <Divider style={{ marginBottom: "40px" }} />

        <Typography variant="h5" style={{ marginBottom: "20px" }}>
          Partner Communities, Users, and Members
          <IconButton id="editPartners" aria-label="update partners" type="button">
            <EditRoundedIcon fontSize="small" color="secondary" />
          </IconButton>
        </Typography>
        <Grid container spacing={3} style={{ marginBottom: "40px" }}>
          <Grid item sm={4} xs={12}>
            <TextField
              variant="outlined"
              label="Partner Communities"
              name="partners"
              id="partners"
              value="Edit this in backend"
              fullWidth
              disabled
              InputProps={{
                classes: {
                  notchedOutline: classes.input,
                },
              }}
              inputProps={{
                className: classes.input,
              }}
            />
          </Grid>

          <Grid item sm={4} xs={12}>
            <TextField
              variant="outlined"
              label="Users"
              name="users"
              id="users"
              value="Edit this in backend"
              fullWidth
              disabled
              InputProps={{
                classes: {
                  notchedOutline: classes.input,
                },
              }}
              inputProps={{
                className: classes.input,
              }}
            />
          </Grid>

          <Grid item sm={4} xs={12}>
            <TextField
              variant="outlined"
              label="Members"
              name="members"
              id="members"
              value="Edit this in backend"
              fullWidth
              disabled
              InputProps={{
                classes: {
                  notchedOutline: classes.input,
                },
              }}
              inputProps={{
                className: classes.input,
              }}
            />
          </Grid>
        </Grid>
        <Divider style={{ marginBottom: "40px" }} />

        <Typography variant="h5" style={{ marginBottom: "20px" }}>
          Features Summary
          <IconButton id="editFeaturesSummary" aria-label="update features" type="button">
            <EditRoundedIcon fontSize="small" color="secondary" />
          </IconButton>
        </Typography>
        <Grid container spacing={3} style={{ marginBottom: "40px" }}>
          <Grid item sm={4} xs={12}>
            <TextField
              variant="outlined"
              label="Feature 1"
              name="feature1"
              id="feature1"
              value="Edit this in backend"
              fullWidth
              disabled
              InputProps={{
                classes: {
                  notchedOutline: classes.input,
                },
              }}
              inputProps={{
                className: classes.input,
              }}
            />
          </Grid>

          <Grid item sm={4} xs={12}>
            <TextField
              variant="outlined"
              label="Feature 2"
              name="feature2"
              id="feature2"
              value="Edit this in backend"
              fullWidth
              disabled
              InputProps={{
                classes: {
                  notchedOutline: classes.input,
                },
              }}
              inputProps={{
                className: classes.input,
              }}
            />
          </Grid>

          <Grid item sm={4} xs={12}>
            <TextField
              variant="outlined"
              label="Feature 3"
              name="feature3"
              id="feature3"
              value="Edit this in backend"
              fullWidth
              disabled
              InputProps={{
                classes: {
                  notchedOutline: classes.input,
                },
              }}
              inputProps={{
                className: classes.input,
              }}
            />
          </Grid>
        </Grid>

        <Divider style={{ marginBottom: "40px" }} />

        <Typography variant="h5" style={{ marginBottom: "20px" }}>
          Message from the Director
          <IconButton id="editMessage" aria-label="update message" type="button">
            <EditRoundedIcon fontSize="small" color="secondary" />
          </IconButton>
        </Typography>
        <Grid container spacing={3} style={{ marginBottom: "40px" }}>
          <Grid item sm={6} xs={12}>
            <TextField
              variant="outlined"
              label="Image"
              name="image"
              id="image"
              value="Edit this in backend"
              fullWidth
              disabled
              InputProps={{
                classes: {
                  notchedOutline: classes.input,
                },
              }}
              inputProps={{
                className: classes.input,
              }}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              variant="outlined"
              label="Message"
              name="message"
              id="message"
              value="Edit this in backend"
              fullWidth
              disabled
              InputProps={{
                classes: {
                  notchedOutline: classes.input,
                },
              }}
              inputProps={{
                className: classes.input,
              }}
            />
          </Grid>
        </Grid>

      </Container>
    </ThemeProvider>
  );
};

export default SuperAdminHome;
