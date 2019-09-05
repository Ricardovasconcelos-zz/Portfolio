import React from "react";

import "./Painel.css";
import Typing from "react-typing-animation";
import {Animated} from "react-animated-css";

import Instagram from "../img/instagram.svg";
import Twitter from "../img/twitter.svg";
import Git from "../img/github.svg";
import Youtube from "../img/youtube.svg";
import Linkedin from "../img/linkedin.svg";

import { Container } from "react-bootstrap";


const Painel = () => (
  <div className="Background"> 
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

        <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
        <div className="IconSocial">
        <a href="https://www.instagram.com/ricardovasconceloss">
        <img src={Instagram} className="editImage" alt="" />
      </a>
      <a href="https://www.twitter.com/Ricardovass_">
      <img src={Twitter} className="editImage" alt="" />
      </a>
      <a href='https://www.github.com/Ricardovasconcelos'>
      <img src={Git} className="editImage" alt="" />
      </a>
      <a href='https://www.linkedin.com/in/ricardo-vasconcelos/'>
      <img src={Linkedin} className="editImage" alt="" />
      </a>
      <a href='https://www.youtube.com/ricardovasconceloss'>
      <img src={Youtube} className="editImage" alt="" />
      </a>
        </div>
        </Animated>
        
      </div>
    </div>
  </Container>
  </div>
);

export default Painel;
