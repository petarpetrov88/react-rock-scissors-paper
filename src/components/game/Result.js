import React from 'react';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {
    RESULT_DRAW,
    RESULT_PLAYER_A,
    RESULT_PLAYER_B
} from '../../constants'

const styles = theme => ({
    wrapper : {
        marginTop: theme.spacing.unit * 5
    },
    button : {
        margin: 'auto'
    },
    buttonWrapper : {
        align: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing.unit * 5
    }
});

const Result = ({ classes, getResult, playerA, playerB, setGameMode }) => {
    let text;
    switch (getResult()) {
        case RESULT_DRAW:
            text = 'It is a tie!';
            break;
        case RESULT_PLAYER_A:
            text = `${playerA.name} wins!`;
            break;
        case RESULT_PLAYER_B:
            text = `${playerB.name} wins!`;
            break;
        default:
            text = `Invalid result. Please check weapons configuration!`;
    }

    return (
        <div className={classes.wrapper}>
            <Typography color="secondary" align="center" variant="h3" marked="center">
                {text}
            </Typography>
            <Typography color="inherit" align="center" variant="h5" marked="center">
                {playerA.name} {playerA.score} - {playerB.score} {playerB.name}
            </Typography>
            <div className={classes.buttonWrapper}>
                <Button
                    color="secondary"
                    variant="contained"
                    size="medium"
                    className={classes.button}
                    onClick={() => {
                        setGameMode(null);
                    }}
                >
                    New Game
                </Button>
            </div>
        </div>
    );
}

export default withStyles(styles)(Result);