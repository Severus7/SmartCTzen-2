import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Divider,
  TextField,
  Typography,
  Grid,
  ThemeProvider,
} from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import ExportToolbar from "../../components/ExportToolbar/ExportToolbar";
import useStyles from "../../components/Theme/Styles";
import theme from "../../components/Theme/Theme";

// function ExportToolbar() {
//   return (
//     <GridToolbarContainer>
//       <GridToolbarExport />
//     </GridToolbarContainer>
//   );
// }

const columns = [
  { field: "_id", headerName: "ID", width: 230 },
  { field: "title", headerName: "Proposal Title", width: 200 },
  { field: "location", headerName: "Location", width: 200 },
  { field: "like", headerName: "Like", width: 120 },
  { field: "dislike", headerName: "Dislike", width: 120 },
  { field: "status", headerName: "Status", width: 200 },
];

const AdminProposals = () => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const { register, handleSubmit, errors, field, formState, control } =
    useForm();

  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get("/proposals/all", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      // console.log(response.data.doc)
      setRows(response.data.doc);
    };
    sendRequest();
  }, []);

  const onSubmit = async (data) => {
    const values = {
      title: data.title,
      caption: data.caption,
      description: data.description,
      location: data.location,
    };

    console.log(values);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h2" gutterBottom>Proposals</Typography>
        <div className={classes.adminTables}>
          <DataGrid
            getRowId={(row) => row._id}
            rows={rows}
            columns={columns}
            pageSize={10}
            components={{
              Toolbar: ExportToolbar,
            }}
          />
        </div>
        <Divider style={{ marginBottom: "40px" }} />
        <div>
          <Typography variant="h4" gutterBottom >Create a Proposal</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              spacing={3}
              direction="column"
              className={classes.gridMarginBottom}
            >
              <Grid item sm={6} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <TextField
                      {...register("title", { required: true })}
                      {...field}
                      variant="outlined"
                      label="Proposal Title"
                      name="title"
                      id="title"
                      placeholder="Proposal Title"
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
                  name="title"
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <TextField
                      {...register("caption", { required: true })}
                      {...field}
                      variant="outlined"
                      label="Caption"
                      name="caption"
                      id="caption"
                      placeholder="Caption"
                      fullWidth
                      required
                      multiline
                      minRows="2"
                      maxRows="5"
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
                  name="caption"
                  defaultValue=""
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <TextField
                      {...register("description", { required: true })}
                      {...field}
                      variant="outlined"
                      label="Description"
                      name="description"
                      id="description"
                      placeholder="Description"
                      fullWidth
                      required
                      multiline
                      minRows="5"
                      maxRows="10"
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
                  name="description"
                  defaultValue=""
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <TextField
                      {...register("location", { required: true })}
                      {...field}
                      variant="outlined"
                      label="Location"
                      name="location"
                      id="location"
                      placeholder="Location"
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
                  name="location"
                  defaultValue=""
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={3}
              style={{ marginTop: "20px" }}
            >
              <Grid item sm={4} xs={6}>
                <Button variant="contained" color="primary" type="reset">
                  Cancel
                </Button>
              </Grid>
              <Grid item sm={4} xs={6}>
                <Button variant="contained" color="secondary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default AdminProposals;
