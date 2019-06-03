import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
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
  const [ isEditing, setIsEditing ] = useState(false);
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
