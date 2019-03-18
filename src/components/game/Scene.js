import React from 'react';
import { withStyles } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { GAME_MODE_PLAYER_COMPUTER } from '../../constants'

import WeaponIcon from './WeaponIcon'
import WeaponAnimation from './WeaponAnimation'
import Result from './Result'
import UserChoice from './UserChoice'

const styles = theme => ({
    root: {
        flexGrow: 1,

    },
    h5: {
        [theme.breakpoints.down("sm")]: {
            fontSize: '0.5rem'
        }
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    wrapper: {
        marginTop: theme.spacing.unit * 5
    }
});


const Scene = ({ classes, gameMode, playerA, playerB, getResult, setGameMode, setPlayerWeapon }) => {

    return (
        <div className={classes.root}>
            <Typography color="inherit" align="center" variant="h2" marked="center">
                { gameMode.title }
            </Typography>
            <div className={classes.wrapper}>
                <Grid container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                                { playerA.name }
                            </Typography>
                            { (playerA.weapon)? <WeaponIcon weapon={playerA.weapon} /> : <WeaponAnimation /> }
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                                { playerB.name }
                            </Typography>
                            { (playerB.weapon)? <WeaponIcon weapon={playerB.weapon} /> : <WeaponAnimation /> }
                        </Paper>
                    </Grid>
                </Grid>
                {gameMode.id === GAME_MODE_PLAYER_COMPUTER && !playerA.weapon && <UserChoice setPlayerWeapon={setPlayerWeapon} />}
                {playerA.weapon && playerB.weapon && <Result playerA={playerA} playerB={playerB} getResult={getResult} setGameMode={setGameMode} />}

            </div>
        </div>
    );
};

export default withStyles(styles)(Scene);