import React from "react";

import "./About.css";
import { Button, ButtonToolbar } from "react-bootstrap";
import LineUp from '../lineUp/LineUp'
import Photo from "../img/me.jpeg";

const About = props => {
  return (
    <div className="About">
      <h3>About me</h3>

      <LineUp/>

      <img src={Photo} className="my-photo" alt=''/>


      <div className="description">
        <p>
          Graduating in Computer Science, Front-end Developer and in love with Javascript
          ecosystem. I've been working as developer since my 16 years old, I worked
          as Freelancer and some startups developing web applications. I
          also give talks about my knowledge throughout my city.
        </p>
      </div>

      <ButtonToolbar>
        <Button variant="primary" className="text-button">DOWNLOAD MY CV</Button>
      </ButtonToolbar>
    </div>
  );
};

export default About;
