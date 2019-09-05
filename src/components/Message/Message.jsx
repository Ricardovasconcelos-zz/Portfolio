import React from "react";

import "./Message.css";

import { Container } from "react-bootstrap";
import { FaWhatsapp,FaEnvelope } from "react-icons/fa";

const Message = () => (
  <div className="Message">
    <Container>
      <div className="MessageComponents">
        <div className="Whatsapp">
            <FaWhatsapp size={50}/>
          <h6>Whatsapp</h6>
          <p>
              <a href='http://api.whatsapp.com/send?1=pt_BR&phone=5582996597718'>Fale comigo agora!</a>
          </p>
        </div>

        <div className="Email">
            <FaEnvelope size={50}/>
          <h6>E-mail</h6>
          <p>
              <a href=''>ricardovasconcelos.dev@gmail.com</a>
          </p>
        </div>
      </div>
    </Container>
  </div>
);
export default Message;
