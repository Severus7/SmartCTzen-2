import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
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
  { field: "lastname", headerName: "Last name", width: 230 },
  { field: "firstname", headerName: "First name", width: 230 },
  { field: "middlename", headerName: "Middle name", width: 230 },
  { field: "suffix", headerName: "Suffix", width: 120 },
  { field: "sex", headerName: "Sex", width: 100 },
  { field: "birthday", headerName: "Birthday", width: 200 },
  { field: "role", headerName: "Role", width: 200 },
  { field: "status", headerName: "Status", width: 200 },
];

const AdminApplicants = () => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const { register, handleSubmit, errors, field, formState, control } =
    useForm();

  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get("/getAllApplicants", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // console.log(response.data.doc)
      setRows(response.data.applicants);
    };
    sendRequest();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h2" gutterBottom>
          Applicants
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
      </Container>
    </ThemeProvider>
  );
};

export default AdminApplicants;