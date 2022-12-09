import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Pic0 from "../img/home_page/cycle.webp";
import Pic1 from "../img/home_page/pic1.webp";
import Pic2 from "../img/home_page/pic2.webp";
import Pic3 from "../img/home_page/pic3.webp";
import Pic4 from "../img/home_page/pic4.webp";



function Home() {
  
  return (
    <Container className="mt-3 px-5">

      <Header />
      <Image img alt="Summer collection" src={Pic0} className="main_image" />
      <div className="round"> <div className="adv_text"><h2>SUMMER COLLECTION</h2> <p className="adv_text2">Now in stores <br />To get the look come <br /><a className="link">visit us </a></p></div></div>
      <p className="line"><span>summer 2023</span></p>

      <div className="wrapper_pic">
        <div className="container_pic"> <Image img alt="relax style" src={Pic1} className="pic" />
        <div className="overlay">Relax style</div></div>
        <div className="container_pic"><Image img alt="holiday style" src={Pic2} className="pic" />
        <div className="overlay">Holiday style</div></div>
        <div className="container_pic"><Image img alt="casual style" src={Pic3} className="pic" />
        <div className="overlay">Casual style</div></div>
        <div className="container_pic"><Image img alt="romantic style" src={Pic4} className="pic" />
        <div className="overlay">Romantic style</div></div>

      </div>
      <Footer />
    </Container>
  );
}

export default Home;
