import React from 'react';
import './App.css'
import Nav from './components/Nav'
import About from './components/About'
import Shop from './components/Shop'

function App() {
  return (
    <main className="App">
      <Nav />
      <About />
      <Shop />
    </main>
  );
}

export default App;
