import React, { Component } from "react";
import Slider from "react-slick";

import "./Github.css";
import api from "../../services/api";
import LineUp from "../lineUp/LineUp";
import { Container } from "react-bootstrap";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,borderRadius:'25px', background: "#6a7ff9" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,borderRadius:'25px', background: "#6a7ff9" }}
        onClick={onClick}
      />
    );
  }


  
class Github extends Component {
  state = {
    repository: []
  };

  componentDidMount() {
    this.loadRepository();
  }

  loadRepository = async () => {
    const response = await api.get("/repos");
    console.log(response.data);

    this.setState({ repository: response.data });
  };


  render() {
    const { repository } = this.state;

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 10,
        rows: 2,
        slidesPerRow: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow/>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 765,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
    <div className="Github">
   <Container>
          <h3>Projects</h3>
          <LineUp/>
          <Slider {...settings}>
          {repository.map(item => (
              <div>
                <div className="Repositories">
                    <div className="each-repository" href="www.google.com">
                    <h6><strong>{item.name}</strong></h6>
                    <p>{item.description} </p>
                    <p>{item.language}</p>

                    </div>
                
                  </div>
                </div>
            ))}
          </Slider>
      </Container>
      </div>
    );
  }
}
export default Github;
