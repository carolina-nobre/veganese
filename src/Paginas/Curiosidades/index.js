import React from 'react'
import { getCard } from '../../service/cardcuruosidade'
import Card from '../../Componentes/Card/Card'
import NavBar from '../../Componentes/NavBar'


class Curiosidades extends React.Component {
    state = {
        cardcuriosidades: []
    }


    componentDidMount() { //esta montando/juntando a função abaixo
       
        getCard()
            .then(response => {
                
                this.setState({
                    cardcuriosidades: response.data
                })

            })
            .catch(error => {
                console.error(error)
            })

    }

    render() {
        const curiosidades = this.state.cardcuriosidades;

        return (
            <div>
                <NavBar />

                {
                    curiosidades.map(curiosidade => (
                        <Card key={curiosidade.id}
                            titulo={curiosidade.titulo}
                            texto={curiosidade.texto}
                        />
                    ))
                }
                
            </div>
        )
    }
}

export default Curiosidades