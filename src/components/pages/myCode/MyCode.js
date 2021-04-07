import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Icon1 from './icons/clean.png'
import Icon2 from './icons/fast.png'
import Icon3 from './icons/reusable.png'
import Icon4 from './icons/maintainable.png'
import Arrow from './icons/arrow-down2.png'

const Features = () => {

    const handleAction = () => {
        if (!document.querySelector('.feature').classList.contains('visible')) {
            document.querySelector('.feature').classList.add('visible')
            document.querySelector('.drop-arrow').classList.add('active')
        } else {
            document.querySelector('.feature').classList.remove('visible')
            document.querySelector('.drop-arrow').classList.remove('active')
        }
    }

    return (
        <div className='feature-rel-box'>

            <div className='feature' id='feature'>
                <h2>Sobre Mi Código</h2>
                <hr />
                <Container>
                    <Row>
                        <Col md={3}>
                            <img src={Icon1} alt='icon' className='feature-img' />
                            <h3>Limpio</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dapibus elit. Donec mi lorem, eleifend a maximus quis, varius eget ex. Sed at mollis felis, quis interdum ipsum. Aenean.</p>
                        </Col>
                        <Col md={3}>
                            <img src={Icon2} alt='icon' className='feature-img' />
                            <h3>Rápido</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dapibus elit. Donec mi lorem, eleifend a maximus quis, varius eget ex. Sed at mollis felis, quis interdum ipsum. Aenean.</p>
                        </Col>
                        <Col md={3}>
                            <img src={Icon3} alt='icon' className='feature-img' />
                            <h3>Reutilizable</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dapibus elit. Donec mi lorem, eleifend a maximus quis, varius eget ex. Sed at mollis felis, quis interdum ipsum. Aenean.</p>
                        </Col>
                        <Col md={3}>
                            <img src={Icon4} alt='icon' className='feature-img' />
                            <h3>Mantenible</h3>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dapibus elit. Donec mi lorem, eleifend a maximus quis, varius eget ex. Sed at mollis felis, quis interdum ipsum. Aenean.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <button className='circle' onClick={handleAction}>
                <img src={Arrow} alt='arrow' className='drop-arrow' />
            </button>

        </div>
    );
}

export default Features
    ;