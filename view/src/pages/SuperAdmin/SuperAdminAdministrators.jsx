import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
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
  { field: "role", headerName: "Role", width: 200 },
];

const SuperAdminAdministrators = () => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get("/getAllAdministrators", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // console.log(response.data.doc)
      setRows(response.data.administrators);
    };
    sendRequest();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h2" gutterBottom>
          List of Administrators
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

export default SuperAdminAdministrators;
