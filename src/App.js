import React from 'react';
import './App.css';

import Painel from './components/painel/Painel'
import About from './components/about/About'
import Github from './components/github/Github';

function App() {

  return (

    <div className="App">
      <Painel/>
      <About/>
      <Github/>
    </div>
  );
}

export default App;
