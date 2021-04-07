import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './dibujo.svg';
import arrowDown from './arrow-down2.svg';
import nameImg from './dibujo.png'


const Hero = () => {

    const ChangeVisibility = () => {
        document.querySelector('.name').classList.add('visible')
        document.querySelector('.subtitle').classList.add('visible')
        document.querySelector(' #hero-link').classList.add('visible')
    }



    return (
        <>
            <div className='vivus-bg' id='hero'>

                <div md={9} className='vivus-col'>
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
                    <p className='subtitle'>Desarrollador Web</p>

                    <a href='#aboutMe' className='scrollto' id='hero-link'>

                        <div className='scroll-icon'>
                            <img src={arrowDown} alt='arrow' className='arrow-down' />
                            <p>Este es el camino</p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Hero;