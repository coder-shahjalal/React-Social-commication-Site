import React, { useState, useEffect } from 'react'; 
import AllPosts from '../AllPosts/AllPosts';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Home = () => {

    const [posts, setPost] = useState([]); 
    const classes = useStyles();

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])


    return(
          <>
            <CssBaseline />
            <Container maxWidth="sm">
              <div className={classes.root}>
                <Grid container spacing={3}>
                  {
                      posts.map(post => <AllPosts post={post} />)
                  }
                </Grid>
              </div>
            </Container>
        </>
    )

}

export default Home; 