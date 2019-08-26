import React from "react";

import "./About.css";
import { Button, ButtonToolbar } from "react-bootstrap";

import Photo from "../img/me.jpeg";

const About = props => {
  return (
    <div className="About">
      <h3>About me</h3>

      <div className="under-line">
        <div className="line-up">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      <img src={Photo} className="my-photo" />

      <div className="description">
        <p>
          Graduating in Computer Science, Front-end Developer, Javascript
          ecosystem. I've been working with that since my 16 years old, I worked
          as Freelancer and some startups developing web applications. Now I
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
