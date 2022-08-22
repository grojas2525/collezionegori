import SubHeader from '../components/SubHeader';
import { Container, Col, Row } from 'reactstrap';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact Us' />

            <Row className='row-content align-items-center'>
                <Col sm='4'>
                    <h5>Address</h5>
                    <address>
                        Collezione Gori Fattoria di Celle
                        <br />
                        via Montalese 7 51030 Santomato (Pistoia)
                        <br />
                        Italy
                    </address>
                </Col>

                <Col>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:info@goricoll.it'
                    >
                        <i className='fa fa-envelope-o' /> info@goricoll.it
                    </a>
                </Col>
            </Row>

            <Row className='row-content'>
                <Col xs='12'>
                    <h2> Send Us Your Feedback </h2>
                    <hr/>
                </Col>

                <Col md='10'>
                    TBD: ContactForm
                </Col>

            </Row>
        </Container> 
    )
};

export default ContactPage;