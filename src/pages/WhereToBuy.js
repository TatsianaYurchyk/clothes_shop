import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const WhereToBuy = () => {
    const items = [
        { title: 'NYC', content: '500 Terry Francois', content2:' St.San Francisco, CA 94158',teleph:'T 123-456-7890' },
        { title: 'AUSTIN', content: '500 Terry Francois', content2:' St.San Francisco, CA 94158',teleph:'T 123-456-7890'},
        { title: 'L.A.', content: '500 Terry Francois', content2:' St.San Francisco, CA 94158',teleph:'T 123-456-7890' },
        { title: 'TORONTO', content: '500 Terry Francois', content2:' St.San Francisco, CA 94158',teleph:'T 123-456-7890' },
        // { title: 'TORONTO', content: '500 Terry Francois St.San Francisco, CA 94158T 123-456-7890' },
    ];

    return (
        <Container className="mt-3 px-5">
            <Header />
            <h1> WHERE TO BUY</h1>
            <div className="wrapper_addresses">
                <div className="wrapper_subtitle"><p> Find us where you are <br />Choose your best place to look perfect</p></div>
                {items.map((item) => (
                    <Card key={items.id}>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>

                            <Card.Text>
                                {item.content} <br/>
                                {item.content2}<br/>
                                {item.teleph}

                            </Card.Text>

                        </Card.Body>
                    </Card>
                ))}




                {/* <Card >
      <Card.Body>
        <Card.Title>NYC</Card.Title>
       
        <Card.Text>
            <pre>
            500 Terry Francois St.
            San Francisco, CA 94158
            T 123-456-7890
            </pre>
      
        </Card.Text>
       
      </Card.Body>
    </Card> */}
            </div>
            <Footer />
        </Container>
    )
}
export default WhereToBuy;