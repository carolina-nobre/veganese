import React from 'react'
import './Ong.css'


function Ong  (props) {
    return(
        <div className="ong container">
            <img>{props.img}</img>
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
            <link>{props.link}</link>
        </div>
    )
}

export default Ong;