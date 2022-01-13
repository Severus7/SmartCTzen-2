import React, { useState, useEffect } from "react";
import {
  Avatar,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import ThumbDownRoundedIcon from "@material-ui/icons/ThumbDownRounded";
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

const Proposals = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get("/proposals/all", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // console.log(response.data.doc)
      setProposals(response.data.doc);
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
          <h3>Button group</h3>
          <Grid container spacing={4}>
            {proposals &&
              proposals.map((proposal) => (
                <Grid item xs={12} key={proposal._id}>
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
                        {proposal.title}
                      </Typography>
                      <Typography paragraph variant="body2" component="p">
                        {proposal.caption}
                      </Typography>
                      <Typography>Likes: {proposal.like}</Typography>
                      <Typography>Dislikes: {proposal.dislike}</Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton>
                        <ThumbUpRoundedIcon />
                      </IconButton>
                      <IconButton>
                        <ThumbDownRoundedIcon />
                      </IconButton>
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
                        <Typography>
                          {proposal.description}
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </Card>
                </Grid>
              ))}

            {/* <Grid item xs={12}>
              <Card className={classes.card}>
                <CardHeader title="Lelouch Lamperouge" subheader="October 20, 2021" />
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/2253415/pexels-photo-2253415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Proposal Title
                  </Typography>
                  <Typography paragraph variant="body2" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton>
                    <ThumbUpRoundedIcon />
                  </IconButton>
                  <IconButton>
                    <ThumbDownRoundedIcon />
                  </IconButton>
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
                    <Typography paragraph variant="body2" component="p">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum fugiat
                      quo voluptas nulla pariatur?
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid> */}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Proposals;
