import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
const AllPosts = (props) => {

    const {title, body, id} = props.post;   
    
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return(
           <>
              {/*   <h1>Title : {title}</h1>
              <p>Body : {body}</p>*/}
              <Grid item xs={12}>
                  <Paper className={classes.paper}>
                      <Card className={classes.root}>
                      <CardContent>
                          <Typography variant="h5" component="h2">
                          {title}
                          </Typography>
                          <Typography variant="body2" component="p">
                          {body.substring(0,100)}...
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Link to={`/post/${id}`}>
                              <Button variant="contained" size="small">Read More</Button>
                          </Link>
                      </CardActions>
                      </Card>
                  </Paper>
                </Grid>
            </>
    )

}

export default AllPosts