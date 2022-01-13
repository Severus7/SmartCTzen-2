import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import ExportToolbar from "../../components/ExportToolbar/ExportToolbar";
import useStyles from "../../components/Theme/Styles";
import theme from "../../components/Theme/Theme";

const columns = [
  { field: "_id", headerName: "ID", width: 230 },
  { field: "title", headerName: "Proposal Title", width: 200 },
  { field: "location", headerName: "Location", width: 200 },
  { field: "status", headerName: "Status", width: 200 },
];

const AdminProjects = () => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const { register, handleSubmit, errors, field, formState, control } =
    useForm();
  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get("/projects/all", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      // console.log(response.data.doc);
      setRows(response.data.doc);
    };
    sendRequest();
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h2" gutterBottom>
          Projects
        </Typography>
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
          <Typography variant="h4" gutterBottom>Create a Project</Typography>
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
                      {...register("title", { required: true } )}
                      {...field}
                      variant="outlined"
                      label="Project Title"
                      placeholder="Project Title"
                      name="title"
                      id="title"
                      fullWidth
                      required
                      InputProps={{
                        classes: {
                          notchedOutline: classes.input
                        }
                      }}
                      inputProps={{
                        className: classes.input
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
                      placeholder="Caption"
                      name="caption"
                      id="caption"
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
                      placeholder="Description"
                      name="description"
                      id="description"
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
                      placeholder="Location"
                      name="location"
                      id="location"
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

export default AdminProjects;
