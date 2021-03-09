import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { revealContainers } from './transitionsHelper'

const Reveal = () => {

    document.addEventListener('scroll', revealContainers)

    return (
        <>
            <h2 style={{ 'textTransform': 'uppercase', 'fontWeight': '900', 'marginBottom': '50px', 'fontSize': '50px', 'textAlign': 'center' }}>Reveal</h2>
            <Container style={{ 'marginBottom': '50px' }}>
                <Row className="justify-content-md-center">
                    <Col md={5} className='reveal-col reveal fadeInRight'>
                        <p>Fade in Right</p>
                    </Col>
                    <Col md={5} className='reveal-col reveal fadeInBottom'>
                        <p>Fade in Bottom</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Reveal;