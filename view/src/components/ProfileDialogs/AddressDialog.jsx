import React from "react";
import {
  Button,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  TextField,
  Typography,
  DialogActions,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useForm, Controller } from "react-hook-form";
import useStyles from "../Theme/Styles";

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

const AddressDialog = (props) => {
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
      <DialogTitle>Update Address</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3} className={classes.gridMarginBottom}>
            <Grid item sm={12} xs={12}>
              <Controller
                render={({ field, formState }) => (
                  <TextField
                    {...register("houseNo")}
                    {...field}
                    label="House No."
                    placeholder="House No."
                    name="houseNo"
                    id="houseNo"
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
                name="houseNo"
                defaultValue=""
              />
            </Grid>

            <Grid item sm={12} xs={12}>
              <Controller
                render={({ field, formState }) => (
                  <TextField
                    {...register("barangay")}
                    {...field}
                    label="Barangay"
                    placeholder="Barangay"
                    name="barangay"
                    id="barangay"
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
                name="barangay"
                defaultValue=""
              />
            </Grid>

            <Grid item sm={12} xs={12}>
              <Controller
                render={({ field, formState }) => (
                  <TextField
                    {...register("city")}
                    {...field}
                    label="City/Municipality"
                    placehoder="City/Municipality"
                    name="city"
                    id="city"
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
                name="city"
                defaultValue=""
              />
            </Grid>

            <Grid item sm={12} xs={12}>
              <Controller
                render={({ field, formState }) => (
                  <Autocomplete
                    {...register("province")}
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
                      />
                    )}
                  />
                )}
                name="province"
                control={control}
                defaultValue=""
              />
            </Grid>

            <Grid item sm={12} xs={12}>
              <Controller
                render={({ field, formState }) => (
                  <TextField
                    {...register("zip")}
                    {...field}
                    type="number"
                    label="Zip"
                    placeholder="Zip"
                    name="zip"
                    id="zip"
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
                name="zip"
              />
            </Grid>

            <Grid item sm={12} xs={12}>
              <Controller
                render={({ field, formState }) => (
                  <Autocomplete
                    {...register("region")}
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
                        placeholder="Region"
                        variant="outlined"
                        fullWidth
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

          <Grid container style={{ marginBottom: '30px'}} justifyContent="center">
            <DialogActions >
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

export default AddressDialog;
