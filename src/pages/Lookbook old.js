import Carousel from 'react-bootstrap/Carousel';
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide1 from "../img/lookbook_page/slide1.png";
import Slide2 from "../img/lookbook_page/slide2.png";
import Slide3 from "../img/lookbook_page/slide3.png";

const Lookbook =()=>{
return(
    <Container className="mt-3 px-5">

    <Header />
    <h1> SUMMER LOOK</h1>
<Carousel>
      <Carousel.Item>
        <img
          className="slider_img"
        //   className="d-block h-10"
          src={Slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        <img
          className="slider_img"
          src={Slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="slider_img"
          src={Slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider_img"
          src={Slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Footer />
    </Container>
)
};

export default Lookbook;