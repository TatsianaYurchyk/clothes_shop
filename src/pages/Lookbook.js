
import React, {useState, useEffect} from "react"
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide1 from "../img/lookbook_page/slide1.png";
import Slide2 from "../img/lookbook_page/slide2.png";
import Slide3 from "../img/lookbook_page/slide3.png";
import Slide4 from "../img/lookbook_page/slide4.png";
import Slide5 from "../img/lookbook_page/slide5.png";
import Slide6 from "../img/lookbook_page/slide7.png";

const Lookbook = () => {
  
  const img = [
    <img key={Slide1} src={Slide1} />,
    <img key={Slide2} src={Slide2} />,
    <img key={Slide3} src={Slide3} />,
    <img key={Slide4} src={Slide4} />,
    <img key={Slide5} src={Slide5} />,
    <img key={Slide6} src={Slide6} />,
]
  const [activeIndex, setActiveIndex] = useState(0);
 
// Хук Effect
useEffect(() => {
    // Запускаем интервал
    const interval = setInterval(() => {
        // Меняем состояние
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись
            const res = current === img.length - 1 ? 0 : current + 1
            // Возвращаем индекс
            return res
        })
    }, 6000)
    // Выключаем интервал
    return () => clearInterval()
}, [])
 
// Вычисляем индекс предыдущего слайда
const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
// Вычисляем индекс следующего слайда
const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
  return (
    <Container className="mt-3 px-5">

      <Header />
      <h1> SUMMER LOOK</h1>
      {/* <div>
        <img className="slider_img" src={Slide1} alt="First slide"/>
        <img className="slider_img" src={Slide2} alt="Second slide"/>
        <img className="slider_img" src={Slide3} alt="Third slide"/>
        <img className="slider_img" src={Slide4} alt="Fourth slide"/>
        <img className="slider_img" src={Slide5} alt="Fifth slide"/>
        <img className="slider_img" src={Slide6} alt="Sixth slide"/>
        
        
      </div> */}
      <div className="slider" onMouseEnter={() => clearInterval()}
        >
        <div className="slider-img slider-img-prev"
                key={prevImgIndex}>
            {img[prevImgIndex]}
            
        </div>
        <div className="slider-img"
                key={activeIndex}>
            {img[activeIndex]}
        </div>
        <div className="slider-img slider-img-next"
                key={nextImgIndex}>
            {img[nextImgIndex]}
        </div>
    </div>
      <Footer />
    </Container>
  )
};

export default Lookbook;