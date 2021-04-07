import React from 'react';
import { revealContainers, parallaxEffect } from '../../../transitionsHelper'
import { Container, Row, Col } from 'react-bootstrap'

const Features = () => {


    window.addEventListener("scroll", revealContainers)
    window.addEventListener("scroll", parallaxEffect)

    return (
        <div className='about-me' id='aboutMe'>
            <Container>
                <Row>
                    <Col md={6}>

                        <div className='circle-cont'>
                            <div className='circle pink parallax' data-axis="horizontal" data-speed=".5" />
                            <div className='circle blue parallax' data-axis="horizontal" data-speed="-.5" />

                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='reveal fadeInRight'>
                            <h2>Sobre mí</h2>
                            <p>Desarrollador Frontend valenciano viviendo en Madrid. Apasionado de la maquetación y siempre centrado en los pequeños detalles. Con formación en Desarrollo Web y en Comunicación Audiovisual , uno ambas disciplinas para que el producto tenga el mejor aspecto visual sobre una base de código robusta.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Features
    ;