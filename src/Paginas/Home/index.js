import React from 'react'
import NavBar from '../../Componentes/NavBar'
import Sessao from '../../Componentes/Sessao/index'
import Footer from '../../Componentes/Footer'
import './styles.css'
import Caroseul4 from './img-home/caroseul4.jpg'



const Home = () => (

    < div >

        <NavBar />
        <div className="banner" >
            <img
                className="img__banner"
                src={Caroseul4}
                alt="imagem de um porco"
            />
        </div>
        <div className="sessao-info">
        <Sessao
            titulo="Por que parar de comer carne?"
            texto="Nos dias de hoje temos diversos motivos para parar de consumir produtos de origem animal. Seja pelos animais, pelo meio ambiente ou até mesmo por questões de saúde.
            Estudos recentes do IBGE (Instituto Brasileiro de Geografia e Estatística) indicam que o rebanho de bovinos no país é de cerca de 213 milhões de animais, cerca de 5,5% maior que a população em todo território nacional (de 202 milhões de habitantes) e essa média tende a subir com o aumento da exportação das carnes brasileiras.
            Com mais gado que população, os danos ao meio ambiente são enormes e a conscientização da população se faz necessária para que o consumo seja reduzido. O meio ambiente agradece e também todos os animais que deixarão de ser mortos e explorados apenas para saciar as vontades humanas. E o principal, poder olhar para seu prato de comida e não sentir a culpa de ter tirado uma vida."
        />
         <hr />
        <Sessao
            titulo="O que é vegano? O que é vegetariano?"
            texto="Vegetariano é uma pessoa que não come mais nenhum tipo de carne mas ainda consome alguns derivados e animais e que usa produtos de origem animal. Já o vegano não consome nada de carne e nada de derivados de animais e não usa nada que testam ou que usam algum produto a base de origem animal, assim evitando ao máximo o sofrimento dos animais."
        />
        </div>
        <hr />
        <div className="titulo-doc">
            <h3>Documentários</h3>
        </div>
        <div className="videosDoc container">
            <iframe width="260" height="200" src="https://www.youtube.com/embed/7vpLVA0xNME?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="260" height="200" src="https://www.youtube.com/embed/7Ipx1aDqhfk?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="260" height="200" src="https://www.youtube.com/embed/oDxZfVPYNNA?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <Footer />

    </div >
)

export default Home;