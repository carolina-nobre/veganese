import React from 'react'
import {Card, Button} from 'react-bootstrap';
import NavBar from '../../Componentes/NavBar'
import Sessao from '../../Componentes/Sessao/index'
import Footer from '../../Componentes/Footer'
import './styles.css'
import Caroseul4 from './img-home/caroseul4.jpg'
import Cowspiracy from './img-doc/cowspiracy.jpg'


const Home = () => (

    < div >

        <NavBar />
        <div className="banner" >
            <img
                className="img__banner mr-3"
                src={Caroseul4}
                alt="Generic placeholder"
            />
        </div>
        <Sessao
            titulo="Por que parar de comer carne?"
            texto="Hoje em dia temos diversos motivos para parar de comer carne, pelos animais, pelo ambiente e até mesmo pela sua saúde. Será que no futuro vamos dar conta de alimentar toda a população..."
        />
        <Sessao
            titulo="O que é vegano? O que é vegetariano?"
            texto="Hoje em dia temos diversos motivos para parar de comer carne, pelos animais, pelo ambiente e até mesmo pela sua saúde. Será que no futuro vamos dar conta de alimentar toda a população..."
        />
        <Sessao
            titulo="E o que eu vou comer?"
            texto="Hoje em dia temos diversos motivos para parar de comer carne, pelos animais, pelo ambiente e até mesmo pela sua saúde. Será que no futuro vamos dar conta de alimentar toda a população..."
        />
        <div className="videosDoc container">
        <iframe width="260" height="200" src="https://www.youtube.com/embed/7vpLVA0xNME?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="260" height="200" src="https://www.youtube.com/embed/7Ipx1aDqhfk?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="260" height="200"  src="https://www.youtube.com/embed/oDxZfVPYNNA?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <Footer />

    </div >
)

export default Home;