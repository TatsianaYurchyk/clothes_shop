import Header from "../components/Header";
import { Button } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";
import Cycle from "./cycle.webp";


function Home() {
  return (
    <Container className="mt-3 px-5">

      <Header />
      {/* <div></div> */}
    
    {/* <img src="cycle.webp"> </img> */}
    
    <Image img alt="Summer collection" src={Cycle} className="main_image"/>
    </Container>
  );
}

export default Home;
