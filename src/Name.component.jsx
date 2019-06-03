import React from 'react';
import { Grid, Typography } from '@material-ui/core';

function Name({ nameToUse }) {
  const queryParams = new URLSearchParams(window.location.search);
  let name = queryParams.get('name');
  if (nameToUse) {
    name = nameToUse;
  }
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