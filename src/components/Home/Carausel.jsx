import React from "react";
import img4 from "../images/4.jpg"
import img15 from "../images/15.jpg"
import img25 from "../images/25.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


const Carausel = () => {
  return (
      <Carousel className="p-4" autoPlay infiniteLoop dynamicHeight interval={2000} showIndicators={false} showStatus={false} showThumbs={false}>
        <div>
          <img src={img4} alt="Image"/>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img15} alt="Image"/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img25} alt="Image"/>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
  );
};

export default Carausel;
