import React from "react";

import "./Footer.css";

import Instagram from "../img/instagram.svg";
import Twitter from "../img/twitter.svg";
import Git from "../img/github.svg";
import Youtube from "../img/youtube.svg";
import Linkedin from "../img/linkedin.svg";

const Footer = () => (
  <div className="Footer">
    <div className="IconsSocial">
      <a href="https://www.instagram.com/ricardovasconceloss">
        <img src={Instagram} className="editIcons" alt="" />
      </a>
      <a href="https://www.twitter.com/Ricardovass_">
      <img src={Twitter} className="editIcons" alt="" />
      </a>
      <a href='https://www.github.com/Ricardovasconcelos'>
      <img src={Git} className="editIcons" alt="" />
      </a>
      <a href='https://www.linkedin.com/in/ricardo-vasconcelos/'>
      <img src={Linkedin} className="editIcons" alt="" />
      </a>
      <a href='https://www.youtube.com/ricardovasconceloss'>
      <img src={Youtube} className="editIcons" alt="" />
      </a>

    </div>

    <div className="Developed">
      <h6>Ricardo Vasconcelos © 2019</h6>
    </div>
  </div>
);

export default Footer;
