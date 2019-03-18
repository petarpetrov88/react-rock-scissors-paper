import {
    CHANGE_GAME_MODE
} from './types';


export const changeGameMode = (mode) => dispatch => {
    dispatch({
        type: CHANGE_GAME_MODE,
        payload: mode
    });
};