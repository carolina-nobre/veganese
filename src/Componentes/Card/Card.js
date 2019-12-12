import React from 'react';
import { Card } from 'react-bootstrap';
// import './Card.css'


function InfoCuri  (props) {
    return(
        <Card>
            <Card.Header as="h5">{props.titulo}</Card.Header>
            <Card.Body>
                <Card.Text>{props.texto} </Card.Text>
            </Card.Body>
        </Card>
            
    )
}

export default InfoCuri;
