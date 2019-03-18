export const APP_TITLE = 'Rock Paper Scissors Lizard Spock';
export const APP_SESSION_ENGINE = sessionStorage;

export const GAME_MODE_PLAYER_COMPUTER = 1;
export const GAME_MODE_COMPUTER_COMPUTER = 2;

export const PLAYER_A = 'playerA';
export const PLAYER_B = 'playerB';

export const RESULT_DRAW = 0;
export const RESULT_PLAYER_A = 1;
export const RESULT_PLAYER_B = 2;


export const GAME_MODES = {
    1 : {
        id : 1,
        title : 'Player VS Computer',
        playerA : 'PLAYER',
        playerB : 'COMPUTER'
    },
    2 : {
        id : 2,
        title : 'Computer VS Computer',
        playerA : 'COMPUTER A',
        playerB : 'COMPUTER B',
    }
};

export const WEAPONS = [
    {
        name : 'rock',
        beats : ['scissors', 'lizard'],
        icon : 'rock.svg'
    },
    {
        name : 'scissors',
        beats : ['lizard', 'paper'],
        icon : 'scissors.svg'
    },
    {
        name : 'paper',
        beats : ['spock', 'rock'],
        icon : 'paper.svg'
    },
    {
        name : 'lizard',
        beats : ['spock', 'paper'],
        icon : 'lizard.svg'
    },
    {
        name : 'spock',
        beats : ['scissors', 'rock'],
        icon : 'spock.svg'
    }
];
