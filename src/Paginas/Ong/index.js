import React from 'react'
import { getOng } from '../../service/cardong'
import Ong from '../../Componentes/CardOng/Ong'
import NavBar from '../../Componentes/NavBar'
import Footer from '../../Componentes/Footer'

class MostraOng extends React.Component{
    state = {
        infong: []
    }

    componentDidMount(){
        getOng()
            .then(response => this.setState({ infong: response.data }))
            .catch(error => console.error(error))
    }
    render() {
        const { infong } = this.state;
        return (
            <div>
                <NavBar />
                {
                    infong.map(informacao => (
                        <Ong key={informacao.id}
                            img={informacao.img}
                            titulo={informacao.titulo}
                            texto={informacao.texto}
                            link={informacao.link}
                        />
                    ))
                }
                <Footer/>
            </div>
        )
    }
}
export default MostraOng;
