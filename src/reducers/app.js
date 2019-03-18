import {
    CHANGE_GAME_MODE
} from '../actions/types';

const initialState = {
    gameMode : null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_GAME_MODE:
            return {...state, gameMode: action.payload};
        default:
            return state;
    }
}