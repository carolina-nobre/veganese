import React from 'react'
import { getOng } from '../../service/cardong'
import Ong from '../../Componentes/CardOng/Ong'
import NavBar from '../../Componentes/NavBar'


class OngInf extends React.Component {
    state = {
        infong: []
    }


    componentDidMount() { //esta montando/juntando a função abaixo
       
        getOng()
            .then(response => {
                
                this.setState({
                    infong: response.data
                })

            })
            .catch(error => {
                console.error(error)
            })

    }

    render() {
        const infong = this.state.infong;

        return (
            <div>
                <NavBar/>

                {
                    infong.map(curiosidade => (
                        <Ong key={infong.id}
                            img={infong.img}
                            titulo={infong.titulo}
                            texto={infong.texto}
                            link={infong.link}
                        />
                    ))
                }
                
            </div>
        )
    }
}

export default OngInf;