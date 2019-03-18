import {
    SET_PLAYER_WEAPON,
    SET_WINNER
} from './types'
import {
    PLAYER_A,
    PLAYER_B,
    RESULT_DRAW,
    RESULT_PLAYER_A
} from '../constants'

export const setPlayerWeapon = (player, weapon) => dispatch => {
    dispatch({
        type: SET_PLAYER_WEAPON,
        payload: {
            player: player,
            weapon: weapon
        }
    });
};

export const setResult = (result) => dispatch => {
    if (result !== RESULT_DRAW)
        dispatch({
            type: SET_WINNER,
            payload: (result === RESULT_PLAYER_A)? PLAYER_A : PLAYER_B
        });
};