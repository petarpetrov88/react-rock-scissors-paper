import {
    RESULT_DRAW,
    RESULT_PLAYER_A,
    RESULT_PLAYER_B,
    WEAPONS
} from '../constants'

const Weapon = {
    get: (id) => {
        return (WEAPONS[id])? WEAPONS[id] : null
    },
    random: () => {
        const id = Math.floor(Math.random() * WEAPONS.length);
        return Weapon.get(id);
    },
    compare: (weaponA, weaponB) => {
        if (weaponA.name === weaponB.name)
            return RESULT_DRAW;

        if (weaponA.beats.indexOf(weaponB.name) > -1)
            return RESULT_PLAYER_A;
        else if (weaponB.beats.indexOf(weaponA.name) > -1)
            return RESULT_PLAYER_B;
        else
            return null;
    }
};

export default Weapon;