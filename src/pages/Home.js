import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";

import Main from "./cycle.webp";
import Pic1 from "./pic1.webp";
import Pic2 from "./pic2.webp";
import Pic3 from "./pic3.webp";
import Pic4 from "./pic4.webp";
import Pic5 from "./pic5.webp";
import Pic6 from "./pic6.webp";


function Home() {
  return (
    <Container className="mt-3 px-5">

      <Header />
      <Image img alt="Summer collection" src={Main} className="main_image" />
      <div className="round"> <div className="adv_text"><h2>SUMMER COLLECTION</h2> <p className="adv_text2">Now in stores <br />To get the look come <br /><a className="link">visit us </a></p></div></div>
      <p className="line"><span>summer 2023</span></p>

      <div class="wrapper_pic">
        <div> <Image img alt="relax style" src={Pic1} className="pic" /></div>
        <div><Image img alt="holiday style" src={Pic2} className="pic" /></div>
        <div><Image img alt="casual style" src={Pic3} className="pic" /></div>
        <div><Image img alt="date style" src={Pic4} className="pic" /></div>

      </div>
      <Footer />
    </Container>
  );
}

export default Home;
