import React from "react";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useForm, Controller } from "react-hook-form";
import useStyles from "../Theme/Styles";
import Autocomplete from "@material-ui/lab/Autocomplete";

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

const PersonalInfoDialog = (props) => {
  const classes = useStyles();
  const { openPopup, setOpenPopup, onClose } = props;
  const { register, handleSubmit, errors, field, formState, control } =
    useForm();

  const onSubmit = async (data) => {
    console.log(data);

    //await axios.post("/registerCitizen", values);
    // console.log(res.data);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={openPopup}
      close={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{ classes: { root: classes.dialog } }}
    >
      <DialogTitle>Update Personal Information</DialogTitle>
      <DialogContent>
        <Grid container spacing={3} className={classes.gridMarginBottom}>
          <Grid item sm={12} xs={12}>
            <Controller
              render={({ field, formState }) => (
                <TextField
                  {...register("lastname")}
                  {...field}
                  label="Last name"
                  placeholder="Last name"
                  name="lastname"
                  id="lastname"
                  variant="outlined"
                  fullWidth
                  readOnly
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
            />
          </Grid>

          <Grid item sm={12} xs={12}>
            <Controller
              render={({ field, formState }) => (
                <TextField
                  {...register("firstname")}
                  {...field}
                  label="First name"
                  placeholder="First name"
                  name="firstname"
                  id="firstname"
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
              name="firstname"
            />
          </Grid>

          <Grid item sm={12} xs={12}>
            <Controller
              render={({ field, formState }) => (
                <TextField
                  {...register("middlename")}
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
            />
          </Grid>

          <Grid item sm={12} xs={12}>
            <Controller
              render={({ field, formState }) => (
                <TextField
                  {...register("suffix")}
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
            />
          </Grid>

          <Grid item sm={12} xs={12}>
            <Controller
              render={({ field, formState }) => (
                <Autocomplete
                  {...register("sex")}
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
                    />
                  )}
                />
              )}
              name="sex"
              control={control}
            />
          </Grid>

          <Grid item sm={12} xs={12}>
            <Controller
              render={({ field, formState }) => (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    {...register("birthday")}
                    {...field}
                    format="MM/dd/yyyy"
                    label="Birthday"
                    id="birthday"
                    name="birthday"
                    inputVariant="outlined"
                    KeyboardButtonProps={{
                      color: "secondary",
                    }}
                  />
                </MuiPickersUtilsProvider>
              )}
              control={control}
              name="birthday"
            />
          </Grid>
        </Grid>
        
        <Grid
            container
            style={{ marginBottom: "30px" }}
            justifyContent="center"
          >
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
      </DialogContent>
    </Dialog>
  );
};

export default PersonalInfoDialog;
