import React from 'react'
import './styles.css'

function Sessao (props){
    return(
        <div className="texto-inform1 container">
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
        </div>
    )
}

export default Sessao;