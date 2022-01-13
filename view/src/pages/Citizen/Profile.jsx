import React, { useEffect, useState } from "react";
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
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import useStyles from "../../components/Theme/Styles";
import theme from "../../components/Theme/Theme";
import PersonalInfoDialog from "../../components/ProfileDialogs/PersonalInfoDialog";
import AddressDialog from "../../components/ProfileDialogs/AddressDialog";
import CredentialsDialog from "../../components/ProfileDialogs/CredentialsDialog";
import { useHistory } from "react-router";
import axios from "axios";

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();
  const [openPersonalDialog, setOpenPersonalDialog] = useState(false);
  const [openAddressDialog, setOpenAddressDialog] = useState(false);
  const [openCredentialsDialog, setOpenCredentialsDialog] = useState(false);
  
  const [privateData, setPrivateData] = useState();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [suffix, setSuffix] = useState("");
  const [sex, setSex] = useState("");
  const [birthday, setBirthday] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [barangay, setBarangay] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zip, setZip] = useState("");
  const [region, setRegion] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    if(!localStorage.getItem("token")) {
      history.push("/citizen/profile")
    }
  }, [history]);

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
      setMiddleName(response.data.doc.middlename);
      setSuffix(response.data.doc.suffix);
      setSex(response.data.doc.sex);
      setBirthday(response.data.doc.birthday);
      setHouseNo(response.data.doc.houseNo);
      setBarangay(response.data.doc.barangay);
      setCity(response.data.doc.city);
      setProvince(response.data.doc.province);
      setZip(response.data.doc.zip);
      setRegion(response.data.doc.region);
      setEmail(response.data.doc.email);
      setPassword(response.data.doc.password);
    }

    sendRequest();
  }, []);

  const handlePersonalClose = () => {
    setOpenPersonalDialog(false);
  };

  const handleAddressClose = () => {
    setOpenAddressDialog(false);
  };

  const handleCredentialsClose = () => {
    setOpenCredentialsDialog(false);
  };

  const firstNameZero = firstName.charAt(0);
  const lastNameZero = lastName.charAt(0);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container style={{ marginBottom: "100px" }}>
          <Grid item container spacing={5}>
            <Grid item>
              <Avatar
                style={{ width: "130px", height: "130px", fontSize: "24px" }}
              >
                {firstNameZero + lastNameZero}
              </Avatar>
            </Grid>
            <Grid item container md={6} sm={6} xs={12} alignItems="center">
              <Grid item sm={12} xs={12}>
                <Typography variant="h4">{firstName + " " + lastName}</Typography>
              </Grid>
              <Grid item sm={12} xs={12}>
                <Typography>Citizen</Typography>
              </Grid>
              <Grid item sm={12} xs={12}>
                <input
                  accept="image/*"
                  className={classes.inputFile}
                  id="change-photo"
                  type="file"
                />
                <label htmlFor="change-photo">
                  <IconButton aria-label="upload picture" component="span">
                    <PhotoCameraRoundedIcon
                      fontSize="medium"
                      color="secondary"
                    />
                  </IconButton>
                </label>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* ----------------------------------------PERSONAL INFORMATION---------------------------------------- */}

        <Typography variant="h5" style={{ marginBottom: "20px" }}>
          Personal Information
          <IconButton
            id="editPersonalInfo"
            aria-label="update info"
            type="button"
            onClick={() => setOpenPersonalDialog(true)}
          >
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
              value={lastName}
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
              value={firstName}
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
              value={middleName === "" ? "-" : middleName}
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
              value={suffix === "" ? "-" : suffix}
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
              value={sex}
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
              value={birthday}
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
          <IconButton
            id="editAddress"
            aria-label="update address"
            type="button"
            onClick={() => setOpenAddressDialog(true)}
          >
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
              value={houseNo}
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
              value={barangay}
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
              value={city}
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
              value={province}
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
              value={zip}
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
              value={region}
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
          <IconButton
            id="editCredentials"
            aria-label="update credentials"
            type="button"
            onClick={() => setOpenCredentialsDialog(true)}
          >
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
              value={email}
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
              value={password}
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

export default Profile;
