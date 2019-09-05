import React from "react";

import "./About.css";
import { Button, ButtonToolbar } from "react-bootstrap";
import LineUp from '../lineUp/LineUp'
import Photo from "../img/me.jpeg";
import CV from '../cv/cv.pdf'

const About = props => {
  return (
    <div className="About">
      <h3>About me</h3>

      <LineUp/>

      <img src={Photo} className="my-photo" alt=''/>


      <div className="description">
        <p>
          I'm doing bachelor's degree in computer science, working as front-end developer and in love with Javascript
          ecosystem. I've been working as developer since my 16 years old, I worked
          as freelancer and now I work at a startup developing web and mobile applications. I
          also give talks about my knowledge throughout my city.
        </p>
      </div>

      <ButtonToolbar>
        <Button variant="primary" 
        className="text-button" onClick={e => { e.preventDefault(); window.open(CV); }}>
          DOWNLOAD MY CV
          </Button>
      </ButtonToolbar>
    </div>
  );
};

export default About;
