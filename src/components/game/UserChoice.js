import React from 'react';
import map from 'lodash/map'
import { withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { PLAYER_A, WEAPONS } from '../../constants'

import WeaponIcon from './WeaponIcon';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    wrapper: {
        marginTop: theme.spacing.unit * 5
    }
});

const UserChoice = ({ classes, setPlayerWeapon }) => {
    const items = map(WEAPONS, (item, index) => {
        return (
            <Grid item xs={2} key={index}>
                <Paper className={classes.paper}  onClick={() => {setPlayerWeapon(PLAYER_A, item)}}>
                    <WeaponIcon weapon={item} />
                </Paper>
            </Grid>
        );
    });

    return (
      <div className={classes.wrapper}>
          <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
              Choose your weapon
          </Typography>
          <Grid container
                direction="row"
                justify="space-evenly"
                alignItems="center"
          >
              {items}
          </Grid>
      </div>
    );
};

export default withStyles(styles)(UserChoice);