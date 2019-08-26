import React from "react";

import "./Painel.css";
import Typing from 'react-typing-animation';
import Particles from "react-particles-js";

import { Container } from "react-bootstrap";

const Painel = () => (
  <Container>
    <div className="Painel">
      <div className="Main_description">
        <Typing>
        <h1>I'm Ricardo Vasconcelos</h1>
        </Typing>
        
        <p>
          I am Computer Science Student, Front-End developer and in love with
          Javascript ecosystem
        </p>
      </div>
    </div>
  </Container>
);

export default Painel;
