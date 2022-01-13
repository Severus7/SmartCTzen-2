import React, { useEffect } from "react";
import {
  Container,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Button,
  Typography,
  DialogActions,
  Popper,
} from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import axios from "axios";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useForm, Controller } from "react-hook-form";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SingleFileDropzone from "../Dropzone/SingleFileDropzone";
import useStyles from "../Theme/Styles";

const sexes = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];

const provinces = [
  { value: "Abra", label: "Abra" },
  { value: "Agusan del Norte", label: "Agusan del Norte" },
  { value: "Agusan del Sur", label: "Agusan del Sur" },
  { value: "Aklan", label: "Aklan" },
  { value: "Albay", label: "Albay" },
  { value: "Antique", label: "Antique" },
  { value: "Apayao", label: "Apayao" },
  { value: "Aurora", label: "Aurora" },
  { value: "Basilan", label: "Basilan" },
  { value: "Bataan", label: "Bataan" },
  { value: "Batanes", label: "Batanes" },
  { value: "Batangas", label: "Batangas" },
  { value: "Benguet", label: "Benguet" },
  { value: "Biliran", label: "Biliran" },
  { value: "Bohol", label: "Bohol" },
  { value: "Bukidnon", label: "Bukidnon" },
  { value: "Bulacan", label: "Bulacan" },
  { value: "Cagayan", label: "Cagayan" },
  { value: "Camarines Norte", label: "Camarines Norte" },
  { value: "Camarines Sur", label: "Camarines Sur" },
  { value: "Camiguin", label: "Camiguin" },
  { value: "Capiz", label: "Capiz" },
  { value: "Catanduanes", label: "Catanduanes" },
  { value: "Cavite", label: "Cavite" },
  { value: "Cebu", label: "Cebu" },
  { value: "Cotabato", label: "Cotabato" },
  { value: "Davao de Oro", label: "Davao de Oro" },
  { value: "Davao del Norte", label: "Davao del Norte" },
  { value: "Davao del Sur", label: "Davao del Sur" },
  { value: "Davao Occidental", label: "Davao Occidental" },
  { value: "Davao Oriental", label: "Davao Oriental" },
  { value: "Dinagat Islands", label: "Dinagat Islands" },
  { value: "Eastern Samar", label: "Eastern Samar" },
  { value: "Guimaras", label: "Guimaras" },
  { value: "Ifugao", label: "Ifugao" },
  { value: "Ilocos Norte", label: "Ilocos Norte" },
  { value: "Ilocos Sur", label: "Ilocos Sur" },
  { value: "Iloilo", label: "Iloilo" },
  { value: "Isabela", label: "Isabela" },
  { value: "Kalinga", label: "Kalinga" },
  { value: "La Union", label: "La Union" },
  { value: "Laguna", label: "Laguna" },
  { value: "Lanao del Norte", label: "Lanao del Norte" },
  { value: "Lanao del Sur", label: "Lanao del Sur" },
  { value: "Leyte", label: "Leyte" },
  { value: "Maguindanao", label: "Maguindanao" },
  { value: "Marinduque", label: "Marinduque" },
  { value: "Masbate", label: "Masbate" },
  { value: "Metro Manila", label: "Metro Manila" },
  { value: "Misamis Occidental", label: "Misamis Occidental" },
  { value: "Misamis Oriental", label: "Misamis Oriental" },
  { value: "Mountain Province", label: "Mountain Province" },
  { value: "Negros Occidental", label: "Negros Occidental" },
  { value: "Negros Oriental", label: "Negros Oriental" },
  { value: "Northern Samar", label: "Northern Samar" },
  { value: "Nueva Ecija", label: "Nueva Ecija" },
  { value: "Nueva Vizcaya", label: "Nueva Vizcaya" },
  { value: "Occiedental Mindoro", label: "Occiedental Mindoro" },
  { value: "Oriental Mindoro", label: "Oriental Mindoro" },
  { value: "Palawan", label: "Palawan" },
  { value: "Pampanga", label: "Pampanga" },
  { value: "Pangasinan", label: "Pangasinan" },
  { value: "Quezon", label: "Quezon" },
  { value: "Quirino", label: "Quirino" },
  { value: "Rizal", label: "Rizal" },
  { value: "Romblon", label: "Romblon" },
  { value: "Samar", label: "Samar" },
  { value: "Sarangani", label: "Sarangani" },
  { value: "Siquijor", label: "Siquijor" },
  { value: "Sorsogon", label: "Sorsogon" },
  { value: "South Cotabato", label: "South Cotabato" },
  { value: "Southern Leyte", label: "Southern Leyte" },
  { value: "Sultan Kudarat", label: "Sultan Kudarat" },
  { value: "Sulu", label: "Sulu" },
  { value: "Surigao del Norte", label: "Surigao del Norte" },
  { value: "Surigao del Sur", label: "Surigao del Sur" },
  { value: "Tarlac", label: "Tarlac" },
  { value: "Zambales", label: "Zambales" },
  { value: "Zamboanga del Norte", label: "Zamboanga del Norte" },
  { value: "Zamboange del Sur", label: "Zamboange del Sur" },
  { value: "Zamboanga Sibugay", label: "Zamboanga Sibugay" },
];

const regions = [
  { value: "Region I (Ilocos Region)", label: "Region I (Ilocos Region)" },
  { value: "Region II (Cagayan Valley)", label: "Region II (Cagayan Valley)" },
  { value: "Region III (Central Luzon)", label: "Region III (Central Luzon)" },
  { value: "Region IV-A (CALABARZON)", label: "Region IV-A (CALABARZON)" },
  { value: "Region V (Bicol Region)", label: "Region V (Bicol Region)" },
  {
    value: "Region VI (Western Visayas)",
    label: "Region VI (Western Visayas)",
  },
  {
    value: "Region VII (Central Visayas)",
    label: "Region VII (Central Visayas)",
  },
  {
    value: "Region VIII (Eastern Visayas)",
    label: "Region VIII (Eastern Visayas)",
  },
  {
    value: "Region IX (Zamboanga Peninsula)",
    label: "Region IX (Zamboanga Peninsula)",
  },
  {
    value: "Region X (Northern Mindanao)",
    label: "Region X (Northern Mindanao)",
  },
  { value: "Region XI (SOCCSKSARGEN)", label: "Region XI (SOCCSKSARGEN)" },
  { value: "Region XIII (Caraga)", label: "Region XIII (Caraga)" },
  {
    value: "NCR (National Capital Region)",
    label: "NCR (National Capital Region)",
  },
  {
    value: "CAR (Cordillera Administrative Region)",
    label: "CAR (Cordillera Administrative Region)",
  },
  {
    value: "BARMM (Bangsamoro Autonomous Region in Muslim Mindanao)",
    label: "BARMM (Bangsamoro Autonomous Region in Muslim Mindanao)",
  },
  { value: "MIMAROPA Region", label: "MIMAROPA Region" },
];

const RegisterDialog = (props) => {
  const classes = useStyles();
  const { openPopup, setOpenPopup, onClose } = props;
  const { register, handleSubmit, errors, field, formState, control } =
    useForm();

  const CustomPopper = (props) => {
    return <Popper {...props} className={classes.popper} />;
  };

  const onSubmit = async (data) => {
    const values = {
      lastname: data.lastname,
      firstname: data.firstname,
      middlename: data.middlename,
      suffix: data.suffix,
      sex: data.sex,
      birthday: data.birthday,
      houseNo: data.houseNo,
      barangay: data.barangay,
      city: data.city,
      province: data.province,
      zip: data.zip,
      region: data.region,
      email: data.email,
      password: data.password,
      identificationCard: data.identificationCard,
      proofOfResidency: data.proofOfResidency
    };

    console.log(values);

    //await axios.post("/registerCitizen", values);
    // console.log(res.data);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={openPopup}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{ classes: { root: classes.dialog } }}
    >
      <DialogTitle>Create an account</DialogTitle>
      <DialogContent>
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* ----------------------------------------PERSONAL INFORMATION---------------------------------------- */}
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <Grid container spacing={3} className={classes.gridMarginBottom}>
              <Grid item sm={4} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <TextField
                      {...register("lastname", { required: true })}
                      {...field}
                      variant="outlined"
                      label="Last name"
                      name="lastname"
                      id="lastname"
                      placeholder="Last name"
                      fullWidth
                      required
                      InputProps={{
                        classes: {
                          notchedOutline: classes.input,
                        },
                      }}
                      inputProps={{
                        className: classes.input,
                      }}
                    />
                  )}
                  control={control}
                  name="lastname"
                  defaultValue=""
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <TextField
                      {...register("firstname", { required: true })}
                      {...field}
                      label="First name"
                      placeholder="First name"
                      name="firstname"
                      id="firstname"
                      variant="outlined"
                      required
                      fullWidth
                      InputProps={{
                        classes: {
                          notchedOutline: classes.input,
                        },
                      }}
                      inputProps={{
                        className: classes.input,
                      }}
                    />
                  )}
                  control={control}
                  name="firstname"
                  defaultValue=""
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <TextField
                      {...register("middlename", { required: false })}
                      {...field}
                      label="Middle name (Optional)"
                      placeholder="Middle name (Optional)"
                      name="middlename"
                      id="middlename"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        classes: {
                          notchedOutline: classes.input,
                        },
                      }}
                      inputProps={{
                        className: classes.input,
                      }}
                    />
                  )}
                  control={control}
                  name="middlename"
                  defaultValue=""
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <TextField
                      {...register("suffix", { required: false })}
                      {...field}
                      label="Suffix (Optional)"
                      placeholder="Suffix (Optional)"
                      name="suffix"
                      id="suffix"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        classes: {
                          notchedOutline: classes.input,
                        },
                      }}
                      inputProps={{
                        className: classes.input,
                      }}
                    />
                  )}
                  control={control}
                  name="suffix"
                  defaultValue=""
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <Autocomplete
                      {...register("sex", { required: true })}
                      id="sex"
                      options={sexes}
                      getOptionLabel={(option) => option.label}
                      getOptionSelected={(option) => option.value}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          {...field}
                          name="sex"
                          label="Sex"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      )}
                    />
                  )}
                  name="sex"
                  control={control}
                  defaultValue=""
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        {...register("birthday", { required: true })}
                        {...field}
                        format="MM/dd/yyyy"
                        id="birthday"
                        name="birthday"
                        label="Birthday"
                        inputVariant="outlined"
                        KeyboardButtonProps={{
                          color: "secondary",
                        }}
                        required
                      />
                    </MuiPickersUtilsProvider>
                  )}
                  name="birthday"
                  control={control}
                />
              </Grid>
            </Grid>

            {/* ----------------------------------------HOME ADDRESS---------------------------------------- */}
            <Typography variant="h6" gutterBottom>
              Home address
            </Typography>
            <Grid container spacing={3} className={classes.gridMarginBottom}>
              <Grid item sm={6} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <TextField
                      {...register("houseNo", { required: true })}
                      {...field}
                      label="House No."
                      placeholder="House No."
                      name="houseNo"
                      id="houseNo"
                      variant="outlined"
                      fullWidth
                      required
                      InputProps={{
                        classes: {
                          notchedOutline: classes.input,
                        },
                      }}
                      inputProps={{
                        className: classes.input,
                      }}
                    />
                  )}
                  control={control}
                  name="houseNo"
                  defaultValue=""
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <TextField
                      {...register("barangay", { required: true })}
                      {...field}
                      label="Barangay"
                      placeholder="Barangay"
                      name="barangay"
                      id="barangay"
                      variant="outlined"
                      fullWidth
                      required
                      InputProps={{
                        classes: {
                          notchedOutline: classes.input,
                        },
                      }}
                      inputProps={{
                        className: classes.input,
                      }}
                    />
                  )}
                  control={control}
                  name="barangay"
                  defaultValue=""
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <TextField
                      {...register("city", { required: true })}
                      {...field}
                      label="City/Municipality"
                      placeholder="City/Municipality"
                      name="city"
                      id="city"
                      variant="outlined"
                      fullWidth
                      required
                      InputProps={{
                        classes: {
                          notchedOutline: classes.input,
                        },
                      }}
                      inputProps={{
                        className: classes.input,
                      }}
                    />
                  )}
                  control={control}
                  name="city"
                  defaultValue=""
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <Autocomplete
                      {...register("province", { required: true })}
                      id="province"
                      options={provinces}
                      getOptionLabel={(option) => option.label}
                      getOptionSelected={(option) => option.value}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          {...field}
                          name="province"
                          label="Province"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      )}
                    />
                  )}
                  name="province"
                  control={control}
                  defaultValue=""
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <TextField
                      {...register("zip", { required: true })}
                      {...field}
                      type="number"
                      label="Zip"
                      placeholder="Zip"
                      name="zip"
                      id="zip"
                      variant="outlined"
                      fullWidth
                      required
                      InputProps={{
                        classes: {
                          notchedOutline: classes.input,
                        },
                      }}
                      inputProps={{
                        className: classes.input,
                      }}
                    />
                  )}
                  control={control}
                  name="zip"
                  defaultValue=""
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <Autocomplete
                      {...register("region", { required: true })}
                      id="region"
                      options={regions}
                      getOptionLabel={(option) => option.label}
                      getOptionSelected={(option) => option.value}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          {...field}
                          name="region"
                          label="Region"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      )}
                    />
                  )}
                  name="region"
                  control={control}
                  defaultValue=""
                />
              </Grid>
            </Grid>

            {/* ----------------------------------------LOGIN CREDENTIALS---------------------------------------- */}
            <Typography variant="h6" gutterBottom>
              Login Credentials
            </Typography>
            <Grid
              container
              spacing={3}
              className={classes.gridMarginBottom}
              direction="column"
            >
              <Grid item sm={6} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <TextField
                      {...register("email", { required: true })}
                      {...field}
                      type="email"
                      label="Email address"
                      placeholder="Email"
                      name="email"
                      id="email"
                      variant="outlined"
                      fullWidth
                      required
                      InputProps={{
                        classes: {
                          notchedOutline: classes.input,
                        },
                      }}
                      inputProps={{
                        className: classes.input,
                      }}
                    />
                  )}
                  control={control}
                  name="email"
                  defaultValue=""
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <TextField
                      {...register("password", { required: true })}
                      {...field}
                      type="password"
                      label="Password"
                      placeholder="Password"
                      name="password"
                      id="password"
                      variant="outlined"
                      fullWidth
                      required
                      InputProps={{
                        classes: {
                          notchedOutline: classes.input,
                        },
                      }}
                      inputProps={{
                        className: classes.input,
                      }}
                    />
                  )}
                  control={control}
                  name="password"
                  defaultValue=""
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <TextField
                      {...register("confirmPassword", { required: true })}
                      {...field}
                      type="password"
                      label="Confirm Password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      id="confirmPassword"
                      variant="outlined"
                      fullWidth
                      required
                      InputProps={{
                        classes: {
                          notchedOutline: classes.input,
                        },
                      }}
                      inputProps={{
                        className: classes.input,
                      }}
                    />
                  )}
                  control={control}
                  name="confirmPassword"
                  defaultValue=""
                />
              </Grid>
            </Grid>

            {/*  */}
            <Typography variant="h6" gutterBottom>
              Documents
            </Typography>
            <Grid container spacing={3}>
              <Grid item sm={12} xs={12}>
                <Typography>Identification Card</Typography>
                <Controller
                  render={({ field, formState }) => (
                    <SingleFileDropzone
                    {...register("identificationCard", { required: true })}
                    {...field}
                    id="identificationCard"
                    name="identificationCard"
                    required
                    />
                  )}
                  control={control}
                  name="identificationCard"
                  defaultValue=""
                />
              </Grid>
              <Grid item sm={12} xs={12}>
                <Typography>Proof of Residency</Typography>
                <Controller
                  render={({ field, formState }) => (
                    <SingleFileDropzone
                    {...register("proofOfResidency", { required: true })}
                    {...field}
                    id="proofOfResidency"
                    name="proofOfResidency"
                    required
                    />
                  )}
                  control={control}
                  name="proofOfResidency"
                  defaultValue=""
                />
              </Grid>
            </Grid>

            <Grid>
              <DialogActions>
                <Button
                  variant="contained"
                  color="primary"
                  type="button"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button variant="contained" color="secondary" type="submit">
                  Submit
                </Button>
              </DialogActions>
            </Grid>
          </form>
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
