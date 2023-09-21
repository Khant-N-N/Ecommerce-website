import Carousel from "react-bootstrap/Carousel";
import firstImg from "../photo/decorate.jpg";
import secondImg from "../photo/consumer-electronics-1.jpg";
import thirdImg from "../photo/fra.jpeg";
import fourthImg from "../photo/fraaa.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <Carousel className="mt-md-5">
        <Carousel.Item interval={3000}>
          <div className="contain-img">
            <img
              className="d-block mw-75 h-auto"
              src={firstImg}
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="contain-img">
            <img
              className="d-block mw-75 h-auto"
              src={secondImg}
              alt="second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="contain-img">
            <img
              className="d-block mw-75 h-auto"
              src={thirdImg}
              alt="third slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="contain-img">
            <img
              className="d-block mw-75 h-auto"
              src={fourthImg}
              alt="fourth slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="my-5 w-100 py-3 px-3">
        <h2 className="font text-center">Find Your </h2>
        <h3 className="font text-center">
          <span className="color">daily needs items</span> here :
        </h3>
        <div className="d-shadow mt-3 w-100 d-flex justify-content-center">
          <Link to="/shop" className="link">
            <span className="designButton font">Shop Now</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
