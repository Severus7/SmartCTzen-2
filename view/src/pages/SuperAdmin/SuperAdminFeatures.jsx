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

const SuperAdminFeatures = (props) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Edit contents of Features page
        </Typography>
        <Divider style={{ marginBottom: "40px" }} />

        <Typography variant="h5" style={{ marginBottom: "20px" }}>
          Feature 1
          <IconButton
            id="editFeature1"
            aria-label="update feature1"
            type="button"
          >
            <EditRoundedIcon fontSize="small" color="secondary" />
          </IconButton>
        </Typography>

        <Grid container spacing={3} style={{ marginBottom: "40px" }} direction="column">
          <Grid item sm={6} xs={12}>
            <TextField
              variant="outlined"
              label="Name"
              name="ame"
              id="name"
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
              label="Description"
              name="description"
              id="description"
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
      </Container>
    </ThemeProvider>
  );
};

export default SuperAdminFeatures;
