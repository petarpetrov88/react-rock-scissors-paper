import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import {
    GAME_MODE_COMPUTER_COMPUTER,
    GAME_MODE_PLAYER_COMPUTER,
    APP_TITLE
} from '../../constants';

const styles = theme => ({
    root: {
        color: theme.palette.common.black,
        background: 'transperant',
        align: 'center',
        [theme.breakpoints.up('sm')]: {
            height: '80vh',
            minHeight: 500,
            maxHeight: 1300,
        },
    },
    button: {
        minWidth: 200,
        margin: 'auto',
    },
    h5: {
        marginBottom: theme.spacing.unit * 4,
        marginTop: theme.spacing.unit * 4
    },
    buttonsWrapper: {
        align: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing.unit * 5
    }
});

const titlePage = ({ classes, setGameMode }) => {

    return (
        <div className={classes.root}>
            <Typography color="inherit" align="center" variant="h1" marked="center">
                { APP_TITLE }
            </Typography>
            <div className={classes.buttonsWrapper}>
                <Button
                  color="secondary"
                  variant="contained"
                  size="large"
                  className={classes.button}
                  onClick={() => {setGameMode(GAME_MODE_PLAYER_COMPUTER)}}
                >
                    Player vs Computer
                </Button>
                <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                    - OR -
                </Typography>
                <Button
                  color="secondary"
                  variant="contained"
                  size="large"
                  className={classes.button}
                  onClick={() => {setGameMode(GAME_MODE_COMPUTER_COMPUTER)}}
                >
                    Computer vs Computer
                </Button>
            </div>
        </div>
    );

};

export default withStyles(styles)(titlePage);