import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Media from "../pages/footer.png";
import { Image } from 'react-bootstrap';
const Footer=()=>{
    return(

      <div className='footer'>
      {/* <div className=' fixed-bottom text-center footer container'> */}
        <p> © 2022 by Lilly Collection. Wix inspiration.</p>
        <Image img alt="social media" src={Media} className="media" />

      </div>
    
    )
};
export default Footer;