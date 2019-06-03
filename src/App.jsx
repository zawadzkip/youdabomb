import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Name from './Name.component';
import BombGif from './img/bomb.gif';


const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100%',
  },
  textAlign: {
    textAlign: 'center'
  }
});

function App() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container direction='column' justify='center' alignContent='center'>
      <Grid item >
        <Name />
      </Grid>
      <Grid item>
        <img alt="bomb gif" src={BombGif} />
      </Grid>
    </Grid>
  );
}

export default App;
