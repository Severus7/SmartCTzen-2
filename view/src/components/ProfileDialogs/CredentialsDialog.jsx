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
import { useForm, Controller } from "react-hook-form";
import useStyles from "../Theme/Styles";

const CredentialsDialog = (props) => {
  const classes = useStyles();
  const { openPopup, setOpenPopup, onClose } = props;
  const { register, handleSubmit, errors, field, formState, control } =
    useForm();

  const onSubmit = async (data) => {
    console.log(data);
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
      <DialogTitle>Edit Login Credentials</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3} className={classes.gridMarginBottom}>
            <Grid item sn={12} xs={12}>
              <Controller
                render={({ field, formState }) => (
                  <TextField
                    {...register("email")}
                    {...field}
                    variant="outlined"
                    label="Email address"
                    placeholder="Email address"
                    name="email"
                    id="email"
                    type="email"
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
                name="email"
              />
            </Grid>

            <Grid item sm={12} xs={12}>
              <Controller
                render={({ field, formState }) => (
                  <TextField
                    {...register("password")}
                    {...field}
                    label="Password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    type="password"
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
                name="password"
              />
            </Grid>
          </Grid>

          <Grid container direction="row" style={{ marginBottom: '30px'}} justifyContent="center">
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
      </DialogContent>
    </Dialog>
  );
};

export default CredentialsDialog;
