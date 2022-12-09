import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
// import Lookbook from '../pages/Lookbook';
// import Home from '../pages/Home';
import { useNavigate } from "react-router-dom"

import { NavLink } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
    return (
        <Container className="px-0">

            <p className="line"><span>LILLY COLLECTION</span></p>

            <Row>
        <Col className="shipping">FREE SHIPPING </Col>
        <Col className="buying">
         
            
              <span className="material-symbols-outlined mt-1 account">
                account_circle
              </span> 
             <span className="align-text-bottom logIn"> Log in</span>
            
              <span className="material-symbols-rounded trolley">
                shopping_cart
              </span>
          
        </Col>
      </Row>
      <div className='menu'>
        {/* <Col className='menu_link'onClick={()=>navigate("/HOME")}>HOME</Col> */}
        <NavLink to='/Home' className='menu_link' activeclassname={"nav-link-selected"}>HOME</NavLink>
        <NavLink to='/Shop' className='menu_link' activeclassname={"nav-link-selected"}>SHOP</NavLink>
        {/* <Col className='menu_link'>SHOP</Col> */}
        {/* <Col className='menu_link' onClick={()=>navigate("/Lookbook")}>LOOKBOOK</Col> */}
        <NavLink to='/Lookbook' className='menu_link' activeclassname={"nav-link-selected"}>LOOKBOOK</NavLink>
        <NavLink to='/WhereToBuy' className='menu_link' activeclassname={"nav-link-selected"}> WHERE TO BUY</NavLink>
        <NavLink to='/VisitUs' className='menu_link' activeclassname={"nav-link-selected"}>VISIT US</NavLink>
        {/* <Col className='menu_link'>WHERE TO BUY</Col>
        <Col className='menu_link'>VISIT US</Col> */}
      </div>

        </Container>

    );
}

export default Header;