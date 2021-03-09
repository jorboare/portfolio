import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './dibujo.svg';
import arrowDown from './arrow-down2.svg';
import nameImg from './dibujo.png'
import { Container, Row, Col } from 'react-bootstrap'
const Hero = () => {

    const ChangeVisibility = () => {
        document.querySelector('.name').classList.add('visible')
        document.querySelector('.subtitle').classList.add('visible')
        document.querySelector('.col-hero-link').classList.add('visible')
    }



    return (
        <>
            <div className='vivus-bg' id='hero'>
                <Container>
                    <Row>
                        <Col md={9} className='vivus-col'>
                            <img src={nameImg} alt='name' className='name' />

                            <ReactVivus
                                className='vivus-animation'
                                id="foo"
                                option={{
                                    file: svg,
                                    animTimingFunction: 'EASE',
                                    type: 'sync',
                                    onReady: console.log,
                                    duration: 200
                                }}
                                callback={ChangeVisibility}
                            />
                            <p className='subtitle'>Web developer</p>

                        </Col>
                        <Col md={3} className='col-hero-link'>

                            <a href='#title' className='scrollto hero-link'>
                                <div className='scroll-icon'>
                                    <img src={arrowDown} alt='arrow' className='arrow-Down' />
                                    <p>Scroll Down</p>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    );
}

export default Hero;