import React from 'react'
import './Ong.css'


function Ong  (props) {
    console.log('>> props', props);
    
    return(
        
        <div className="ong container">
            <img 
            className="imgLogo"
            src={props.img}
            alt="logo ong"
            />
            <div>
            <h2 className="mensagem-titulo">{props.titulo}</h2>
            <hr />
            <p className="mensagem-texto">{props.texto}</p>
            
            </div>
        </div>
        
    )
}

export default Ong;