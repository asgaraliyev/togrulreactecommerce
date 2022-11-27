import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'

function IndividualIntervalsExample() {
    return (
      <Carousel>
        <Carousel.Item interval={100000}>
          <img
            className="slidePicture"
            src={require("../Assets/Images/tshirt1.jfif")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={100000}>
          <img
            className="slidePicture"
            src={require("../Assets/Images/tshirt3.jpg")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slidePicture"
            src={require("../Assets/Images/tshirt5.webp")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default IndividualIntervalsExample;