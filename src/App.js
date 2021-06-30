import React from 'react';
import './App.css'
import Nav from './components/Nav'
import About from './components/About'
import Shop from './components/Shop'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Character from './components/CharacterDetail'

function App() {
  return (
      <Router> 
        <main className="App">
          <Nav />
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/shop" exact component={Shop}/>
            <Route path="/shop/:id" component={Character}/>
            </Switch>
        </main>
      </Router>  
  );
}  

export default App;
