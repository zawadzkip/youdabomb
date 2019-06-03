import React from 'react';
import { Grid } from '@material-ui/core';

function Name() {
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get('name');
  return (
    <Grid container direction='row' justify='center' alignContent='stretch'>
      <Grid item>
        {name ? "Hi" : "Hi!"}
      </Grid>
      {name &&
        <Grid item>
          {`${name}!`}
        </Grid>
      }
    </Grid>
  );

}

export default Name;