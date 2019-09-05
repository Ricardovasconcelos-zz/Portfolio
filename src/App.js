import React from 'react';
import './App.css';

import Painel from './components/painel/Painel'
import About from './components/about/About'
import Github from './components/github/Github';
import Timeline from './components/Timeline/Timeline'
import Footer from './components/Footer/Footer';
import Message from './components/Message/Message';

function App() {
  return (

    <div className="App">
      <Painel/>
      <About/>
      <Github/>
      <Timeline/>
      <Message/>
      <Footer/>

    </div>
  );
}

export default App;
