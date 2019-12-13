// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './Paginas/Home';
import Curiosidade from './Paginas/Curiosidades'
import Ong from './Paginas/Ong/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/curiosidades' component={Curiosidade} />
        <Route path='/ong' component={Ong} />
    </Switch>
    </Router>    
  );
}

export default App;
