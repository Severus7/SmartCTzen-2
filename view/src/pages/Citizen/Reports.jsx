import React, { useState, useEffect } from "react";
import {
  Avatar,
  ButtonGroup,
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Collapse,
  Container,
  IconButton,
  Grid,
  Typography,
  CardMedia,
} from "@material-ui/core";
import axios from "axios";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import theme from "../../components/Theme/Theme";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "primary",
    padding: "0",
    borderRadius: "15px",
    maxWidth: "50em",
    margin: "auto",
  },
  cardItem: {
    textAlign: "center",
  },
  media: {
    height: "2em",
    paddingTop: "56.35%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const Reports = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get("/reports/all", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      //console.log(response.data.doc);
      setReports(response.data.doc);
    };
    sendRequest();
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container justifyContent="center">
          <h3>Button Group</h3>
          <Grid container spacing={4}>
            {reports &&
              reports.map((report) => (
                <Grid item xs={12} key={report._id}>
                  <Card className={classes.card}>
                    <CardHeader
                      title="Lelouch Lamperouge"
                      subheader="October 20, 2021"
                    />
                    <CardMedia
                      className={classes.media}
                      image="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                    <CardContent>
                      <Typography variant="h5">{report.title}</Typography>
                      <Typography paragraph variant="body2" component="p">
                        {report.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Reports;
