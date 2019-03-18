import React from 'react';

const WeaponIcon = ({ weapon : { icon, name } }) => {
    return (
        <img src={require('../../images/' + icon)} alt={name} />
    );
};

export default WeaponIcon;