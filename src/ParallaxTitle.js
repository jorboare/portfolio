import React from 'react';
import { heroTitleAnimation } from './transitionsHelper'

const ParallaxTitle = () => {


    window.addEventListener("load", heroTitleAnimation)

    return (
        <div className='parallax-title' id='title'>
            <h1 className='parallax-title1 fadeInRight revealHero'>Parallax and Effects</h1>
            <h1 className='parallax-title2 fadeInLeft revealHero'>showcase</h1>
        </div>
    );
}

export default ParallaxTitle
    ;