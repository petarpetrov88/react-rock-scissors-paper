import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
    GAME_MODE_COMPUTER_COMPUTER,
    PLAYER_A,
    PLAYER_B
} from '../../constants'

import Scene from '../../components/game/Scene'

import { setPlayerWeapon, setResult } from '../../actions/game';
import Weapon from '../../utils/Weapon'

class Game extends Component {

    componentDidMount() {
        const { getGameMode } = this.props;
        const gameMode = getGameMode();

        if (gameMode.id === GAME_MODE_COMPUTER_COMPUTER)
            this.timer = setInterval(this.setComputerWeapon, 3000);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const prevData = prevProps.data;
        const prevPlayerA = prevData[PLAYER_A];
        const prevPlayerB = prevData[PLAYER_B];
        const { data } = this.props;
        const playerA = data[PLAYER_A];
        const playerB = data[PLAYER_B];

        if (playerA.weapon !== prevPlayerA.weapon)
            this.setPlayerWeapon(PLAYER_B, Weapon.random());

        if (playerB.weapon !== prevPlayerB.weapon)
            this.setWinner(this.getResult());
    };

    setPlayerWeapon = (player, weapon) => {
        const { setPlayerWeapon } = this.props;

        setPlayerWeapon(player, weapon);
    };

    setComputerWeapon = () => {
        this.setPlayerWeapon(PLAYER_A, Weapon.random());
        clearInterval(this.timer);
    };

    setWinner = (result) => {
        const { setResult } = this.props;

        setResult(result);
    };

    getResult = () => {
        const { data } = this.props;
        const playerA = data[PLAYER_A];
        const playerB = data[PLAYER_B];

        return Weapon.compare(playerA.weapon, playerB.weapon);
    }

    render() {
        const { data, getGameMode, setGameMode } = this.props;
        const gameMode = getGameMode();
        const playerA = data[PLAYER_A];
        const playerB = data[PLAYER_B];

        playerA['name'] = gameMode.playerA;
        playerB['name'] = gameMode.playerB;

        return (
            <Scene
                playerA={playerA}
                playerB={playerB}
                gameMode={gameMode}
                getResult={this.getResult}
                setGameMode={setGameMode}
                setPlayerWeapon={this.setPlayerWeapon}
            />
        );
    }
};

function mapStateToProps({ game }) {
    return {
        data: game
    }
}

export default connect(mapStateToProps, { setPlayerWeapon, setResult })(Game);