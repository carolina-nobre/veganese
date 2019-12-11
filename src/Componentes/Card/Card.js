import React from 'react'
import './Card.css'


function Card  (props) {
    return(
        <div className="cadscuriosidades container">
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
        </div>
    )
}

export default Card;