import React from 'react';
import { Grid, Typography } from '@material-ui/core';

function Name() {
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get('name');
  return (
    <Grid container direction='column' justify='center' alignContent='center'>
      <Grid item>
        <Typography variant="h1">
          {name ? `Hi ${name}!` : "Hi!"}
        </Typography>
      </Grid>
        <Grid item>
            <Typography variant="h2">
              you are DA BOMB
            </Typography>
        </Grid>
    </Grid>
  );

}

export default Name;