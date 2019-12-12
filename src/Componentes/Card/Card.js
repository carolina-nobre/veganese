import React from 'react';
import './Card.css'


function InfoCuri  (props) {
    return(
        <div className="cadscuriosidades container">
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
            <hr />
        </div>
    )
}

export default InfoCuri;
