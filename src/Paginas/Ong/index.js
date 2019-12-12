import React from 'react'
import { getOng } from '../../service/cardong'
import Ong from '../../Componentes/CardOng/Ong'
import NavBar from '../../Componentes/NavBar'

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
            <>
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
            </>
        )
    }
}
export default MostraOng;
// class OngInf extends React.Component {
//     state = {
//         infong: []
//     }


//     componentDidMount() { //esta montando/juntando a função abaixo
       
//         getOng()
//             .then(response => {
//                 console.log(response);
                
//                 this.setState({
//                     infong: response.data
//                 })

//             })
//             .catch(error => {
//                 console.error(error)
//             })

//     }

//     render() {
//         const infong  = this.state.infong;

//         return (
//             <div>
//                 <NavBar/>

//                 {
//                     infong.map(informacao => (
//                         <Ong key={informacao.id}
//                             img={informacao.img}
//                             titulo={informacao.titulo}
//                             texto={informacao.texto}
//                             link={informacao.link}
//                         />
//                     ))
//                 }
                
//             </div>
//         )
//     }
// }

// export default OngInf;