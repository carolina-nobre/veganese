import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './Paginas/Home';
import Curiosidade from './Paginas/Curiosidades'
import Ong from './Paginas/Ong/index'
import {Switch, Route} from 'react-router-dom'



function App() {
  return (
    <Switch>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/curiosidades' component={Curiosidade} />
        <Route path='/ong' component={Ong} />
      </div>
 
    </Switch>
      
  );
}

export default App;
