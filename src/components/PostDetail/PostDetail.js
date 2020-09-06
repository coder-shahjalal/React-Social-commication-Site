import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Comments from "../Comments/Comments";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "rgba(70, 122, 219, 0.575)",
    borderRadius: "8px",
    color: "darrgb(66, 66, 66)",
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

  grid: {
    margin: "10px",
  },

  CardContent: {
    border: "1px solid lightgray",
    marginTop: "25px",
    borderRadius: "20px",
    boxShadow: "5px 10px lightgray",
  },

  Typography: {
    color: "darkblue",
    margin: "10px 0px",
  },
});

const PostDetail = () => {
  const [posts, setPost] = useState([]);
  const [postComments, setPostComments] = useState([]);

  const { id } = useParams();
  const classes = useStyles();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => res.json())
      .then((data) => setPostComments(data));
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.CardContent}>
        <Grid className={classes.grid} item xs={12}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.Typography}
                  variant="h5"
                  component="h2"
                >
                  {posts.title}
                  <br></br>
                </Typography>
                <Typography variant="body2" component="p">
                  {posts.body}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <p>Comments : {postComments.length}</p>
        {postComments.map((commentsData) => (
          <Comments commentsData={commentsData}></Comments>
        ))}
      </Container>
    </>
  );
};

export default PostDetail;
