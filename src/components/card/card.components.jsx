import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set4`} alt="monsters" />
        <h2>{props.monster.username}</h2>
    </div>
)