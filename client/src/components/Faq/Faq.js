import { Button } from 'react';
import { Accordion, Card } from "react-bootstrap";
import MainLayout from '../layouts/MainLayout';
import './Faq.scss';

const Faq = () => {
    return (
        <MainLayout>
            <section className="faq-wrapper">
                <h1>F.A.Q.</h1>
                <div className="faq-content">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Is my personal information kept private?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>At Grizzly Savage, we respect your privacy and will never sell, trade or loan your information to any other organization.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Where is Grizzly Savage located?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Our office and flagship store is located in Sofia, Bulgaria</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    Do I have to set up an account to place an order?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>Yes, we require that you create an account, because creating an account can help with a quicker checkout in the future as well as offer other perks like free shipping on certain orders and exclusive sales.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                    Can you ship internationally?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>We ship our gear around the world via DHL Express Worldwide. Delivery time and cost are dependent on order size and destination.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div> 
            </section>
        </MainLayout>
    );
}

export default Faq;