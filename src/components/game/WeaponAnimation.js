import React, { Component } from 'react';

import WeaponIcon from './WeaponIcon'
import Weapon from '../../utils/Weapon'

class WeaponAnimation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weapon: this.selectRandom(),
        };

        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 100);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick() {
        this.setState({ weapon : this.selectRandom() });
    }

    selectRandom = () => {
        return Weapon.random();
    }

    render() {
        return <WeaponIcon weapon={this.state.weapon} />;
    }

};

export default WeaponAnimation;