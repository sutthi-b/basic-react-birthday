import React from 'react';

function Card(props) {
    return (
        <div className="countdown__card">
            <div className="countdown__card__time">{props.time}</div>
            <div className="countdown__card__title">{props.title}</div>
        </div>
    )
}

export default Card;