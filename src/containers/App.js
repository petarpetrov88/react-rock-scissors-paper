import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../css/style.css';

import {
    GAME_MODE_COMPUTER_COMPUTER,
    GAME_MODE_PLAYER_COMPUTER,
    GAME_MODES
} from '../constants'

import TitlePage from './../components/title-page';
import Game from './game';

import { changeGameMode } from '../actions/app';

class App extends Component {

    getGameMode = () => {
        const { data : { gameMode } } = this.props;

        return GAME_MODES[gameMode];
    };

    setGameMode = (gameMode) => {
        const { changeGameMode } = this.props;

        changeGameMode(gameMode);
    };

    render() {
        const { data : { gameMode } } = this.props;

        if (
          gameMode === GAME_MODE_PLAYER_COMPUTER
          || gameMode === GAME_MODE_COMPUTER_COMPUTER
        )
            return <Game
              setGameMode={this.setGameMode}
              getGameMode={this.getGameMode}
            />;

        return <TitlePage setGameMode={this.setGameMode} />;
    }
}

function mapStateToProps({app}) {
    return {
        data : app
    };
}

export default connect(mapStateToProps, {
    changeGameMode
})(App);
