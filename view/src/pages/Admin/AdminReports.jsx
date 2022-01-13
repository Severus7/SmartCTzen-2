import React, { useEffect, useState } from "react";
import { Container, Divider, Typography, ThemeProvider } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import ExportToolbar from "../../components/ExportToolbar/ExportToolbar";
import useStyles from "../../components/Theme/Styles";
import theme from "../../components/Theme/Theme";

const columns = [
  {field: '_id', headerName: 'ID', width: 230},
  {field: 'title', headerName: 'Report Title', width: 200},
  {field: 'location', headerName: 'Location', width: 200},
  {field: 'status', headerName: 'Status', width: 200}
];

const AdminReports = () => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get('/reports/all', {
        headers: {
          "x-access-token": localStorage.getItem("token"),
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      //console.log(response.data.doc);
      setRows(response.data.doc);
    }
    sendRequest();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h2" gutterBottom>Reports</Typography>
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
      </Container>
    </ThemeProvider>
  );
};

export default AdminReports;
