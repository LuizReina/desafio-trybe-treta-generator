import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Preferencia from './pages/Preferencia';
import Comida from './pages/Comida';
import Animal from './pages/Animal';
import Manchete from './pages/Manchete';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path="/" component={ Home } />
          <Route exact path="/preferencia" component={ Preferencia } />
          <Route exact path="/comida" component={ Comida } />
          <Route exact path="/animal" component={ Animal } />
          <Route exact path="/manchete" component={ Manchete } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
