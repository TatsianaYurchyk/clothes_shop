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
        <Container className="mt-3 px-5 ">
            <div className="d-flex flex-column min-vh-100">
            <Header />
            <h1> WHERE TO BUY</h1>
            <div className="contaier_addresses">
            <div className="wrapper_addresses">
                <div className="wrapper_subtitle"><p> Find us where you are <br />Choose your best place to look perfect</p></div>
                {items.map((item) => (
                    <Card key={items.id} border="light">
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
 </div>
            </div>
            </div>
            <Footer />
        </Container>
    )
}
export default WhereToBuy;