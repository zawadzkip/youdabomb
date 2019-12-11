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

const getRandomColor = () => {
  const colorArray = ["#B22222", "#DD0000", "#EF5927",
    "#f2e800", "#ff05db", "##CE05F4", "#10fd08", "#fff403",
    "#40e0d0"]
  const number = Math.floor(Math.random() * colorArray.length);
  return colorArray[number];
};

function App() {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [colorToUse, setColorToUse] = useState(getRandomColor());

  setTimeout(() => {
    let myNewColor = colorToUse;
    while (colorToUse === myNewColor) {
      myNewColor = getRandomColor();
    }
    setColorToUse(myNewColor);
  }, 1000);
  return (
    <Grid className={classes.root}
      container direction='column'
      justify='center' alignContent='center'
      style={{ backgroundColor: `${colorToUse}` }}>
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
