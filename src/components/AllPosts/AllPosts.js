import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "rgba(70, 122, 219, 0.575)",
    borderRadius: "8px",
    color: "darrgb(66, 66, 66)",
  },

  grid: {
    margin: "10px",
  },

  btn: {
    textDecoration: "none",
    borderRadius: "5px",
    color: "blue",
  },

  Typography: {
    color: "darkblue",
    margin: "10px 0px",
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const AllPosts = (props) => {
  const { title, body, id } = props.post;

  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      {/*   <h1>Title : {title}</h1>
              <p>Body : {body}</p>*/}
      <Grid className={classes.grid} item xs={12}>
        <Paper className={classes.paper}>
          <Card className={classes.root}>
            <CardContent className={classes.CardContent}>
              <Typography
                className={classes.Typography}
                variant="h5"
                component="h2"
              >
                {title}
              </Typography>
              <Typography variant="body2" component="p">
                {body.substring(0, 80)}.......
                <Link className={classes.btn} to={`/post/${id}`}>
                  <Button>Read More</Button>
                </Link>
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Paper>
      </Grid>
    </>
  );
};

export default AllPosts;
