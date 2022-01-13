import React, { useState } from "react";
import {
  Avatar,
  Container,
  Grid,
  IconButton,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import PhotoCameraRoundedIcon from '@material-ui/icons/PhotoCameraRounded';
import useStyles from "../../components/Theme/Styles";
import theme from "../../components/Theme/Theme";
import PersonalInfoDialog from "../../components/ProfileDialogs/PersonalInfoDialog";
import AddressDialog from "../../components/ProfileDialogs/AddressDialog";
import CredentialsDialog from "../../components/ProfileDialogs/CredentialsDialog";

const SuperAdminProfile = () => {
  const classes = useStyles();
  const [openPersonalDialog, setOpenPersonalDialog] = useState(false);
  const [openAddressDialog, setOpenAddressDialog] = useState(false);
  const [openCredentialsDialog, setOpenCredentialsDialog] = useState(false);

  const handlePersonalClose = () => {
    setOpenPersonalDialog(false);
  };

  const handleAddressClose = () => {
    setOpenAddressDialog(false);
  };

  const handleCredentialsClose = () => {
    setOpenCredentialsDialog(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container style={{ marginBottom: "100px" }}>
          <Grid item container spacing={5}>
            <Grid item>
              <Avatar
                style={{ width: "130px", height: "130px", fontSize: "24px" }}
              >
                S
              </Avatar>

            </Grid>
            <Grid item container md={6} sm={6} xs={12} alignItems="center">
              <Grid item sm={12} xs={12}>
                <Typography variant="h4">Super Administrator 1</Typography>
              </Grid>
              <Grid item sm={12} xs={12}>
                <Typography>Super Administrator</Typography>
              </Grid>
              <Grid item sm={12} xs={12}>
                <input accept="image/*" className={classes.inputFile} id="change-photo" type="file" />
                <label htmlFor="change-photo">
                  <IconButton aria-label="upload picture" component="span">
                    <PhotoCameraRoundedIcon fontSize="medium" color="secondary" />
                  </IconButton>
                </label>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* ----------------------------------------PERSONAL INFORMATION---------------------------------------- */}

        <Typography variant="h5" style={{ marginBottom: "20px" }}>
          Personal Information
          <IconButton id="editPersonalInfo" aria-label="update info" type="button" onClick={() => setOpenPersonalDialog(true)}>
            <EditRoundedIcon fontSize="small" color="secondary" />
          </IconButton>
        </Typography>

        <Grid container spacing={3} className={classes.gridMarginBottom}>
          <Grid item sm={4} xs={12}>
            <TextField
              variant="outlined"
              label="Last name"
              name="lastname"
              id="lastname"
              value="Rizal"
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
              label="First name"
              name="firstname"
              id="firstname"
              value="Jose"
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
              label="Middle name"
              name="middlename"
              id="middlename"
              value="Protacio"
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
              label="Suffix"
              name="suffix"
              id="suffix"
              value={null}
              defaultValue="(No indicated data)"
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
              label="Sex"
              name="sex"
              id="sex"
              value="Male"
              defaultValue="(No indicated data)"
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
              label="Birthday"
              name="birthday"
              id="birthday"
              defaultValue="(No indicated data)"
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

        {/* ----------------------------------------ADDRESS---------------------------------------- */}
        <Typography variant="h5" style={{ marginBottom: "20px" }}>
          Home Address
          <IconButton id="editAddress" aria-label="update address" type="button" onClick={() => setOpenAddressDialog(true)}>
            <EditRoundedIcon fontSize="small" color="secondary" />
          </IconButton>
        </Typography>
        <Grid container spacing={3} className={classes.gridMarginBottom}>
          <Grid item sm={6} xs={12}>
            <TextField
              variant="outlined"
              label="House No."
              name="houseNo"
              id="houseNo"
              defaultValue="(No indicated data)"
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
              label="Barangay"
              name="barangay"
              id="barangay"
              defaultValue="(No indicated data)"
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
              label="City/Municipality"
              name="city"
              id="city"
              defaultValue="(No indicated data)"
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
              label="Province"
              name="province"
              id="province"
              defaultValue="(No indicated data)"
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
              label="Zip"
              name="zip"
              id="zip"
              defaultValue="(No indicated data)"
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
              label="Region"
              name="region"
              id="region"
              defaultValue="(No indicated data)"
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

        {/* ----------------------------------------LOGIN CREDENTIALS---------------------------------------- */}
        <Typography variant="h5" style={{ marginBottom: "20px" }}>
          Login Credentials
          <IconButton id="editCredentials" aria-label="update credentials" type="button" onClick={() => setOpenCredentialsDialog(true)}>
            <EditRoundedIcon fontSize="small" color="secondary" />
          </IconButton>
        </Typography>
        <Grid container spacing={3} className={classes.gridMarginBottom}>
          <Grid item sm={6} xs={12}>
            <TextField
              variant="outlined"
              label="Email address"
              name="email"
              id="email"
              value="joserizal@gmail.com"
              defaultValue="(No indicated data)"
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
              label="Password"
              name="password"
              id="password"
              type="password"
              value="password123"
              defaultValue="(No indicated data)"
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
      <PersonalInfoDialog openPopup={openPersonalDialog} onClose={handlePersonalClose} />
      <AddressDialog openPopup={openAddressDialog} onClose={handleAddressClose} />
      <CredentialsDialog openPopup={openCredentialsDialog} onClose={handleCredentialsClose} />

    </ThemeProvider>
  );
};

export default SuperAdminProfile;
