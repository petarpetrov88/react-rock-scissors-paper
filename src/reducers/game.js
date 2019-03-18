import {
    PLAYER_A,
    PLAYER_B
} from '../constants';

import { CHANGE_GAME_MODE, SET_PLAYER_WEAPON, SET_WINNER } from '../actions/types'

import Session from '../utils/Session'

let initialState = {};
initialState[PLAYER_A] = {
    weapon : null,
    score : (Session.get(PLAYER_A + '_score'))? Session.get('playerA_score') : 0
};
initialState[PLAYER_B] = {
    weapon : null,
    score : (Session.get(PLAYER_B + '_score'))? Session.get('playerB_score') : 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PLAYER_WEAPON:
            return {...state,
                [action.payload.player] : {
                    ...state[action.payload.player], weapon : action.payload.weapon
                }
            };
        case SET_WINNER:
            let score = state[action.payload]['score'] + 1;

            Session.set(action.payload + '_score', score);

            return {...state,
                [action.payload] : {
                    ...state[action.payload], score : score
                }
            };
        case CHANGE_GAME_MODE:
            return {...state, ...{
                    [PLAYER_A] : {
                        ...state[PLAYER_A], weapon : null
                    },
                    [PLAYER_B] : {
                        ...state[PLAYER_B], weapon : null
                    },
                }};
        default:
            return state;
    }
}