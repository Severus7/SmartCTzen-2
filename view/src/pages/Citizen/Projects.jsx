import React, { useEffect, useState } from "react";
import {
  Avatar,
  ButtonGroup,
  Card,
  CardActions,
  CardHeader,
  CardContent,
  CardMedia,
  Collapse,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
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
    height: "10em",
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

const Projects = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get("/projects/all", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // console.log(response.data.doc);
      setProjects(response.data.doc);
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
            {projects &&
              projects.map((project) => (
                <Grid item xs={12} key={project._id}>
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
                      <Typography variant="h5" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography paragraph variant="body2" component="p">
                        {project.caption}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="Show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography paragraph>
                          {project.description}
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Projects;
