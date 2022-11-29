import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";


const Header = () => {

    return (
        <Container>

            {/* <Row>
        <Col><div className="line"><hr></hr></div></Col>
        <Col><h1>LILLY COLLECTION</h1></Col>
        <Col> <div className="line"></div></Col>
      </Row> */}
            <p className="line"><span>LILLY COLLECTION</span></p>

            <Row>
        <Col className="shipping">FREE SHIPPING <span className="material-symbols-outlined align-middle mb-1">
          account_circle
        </span></Col>
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
      <Row className='menu'>
        <Col>HOME</Col>
        <Col>SHOP</Col>
        <Col>LOOKBOOK</Col>
        <Col>WHERE TO BUY</Col>
        <Col>VISIT US</Col>
      </Row>

        </Container>

    );
}

export default Header;