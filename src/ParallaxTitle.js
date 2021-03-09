import React from 'react';
import { heroTitleAnimation } from './transitionsHelper'

const ParallaxTitle = () => {


    window.addEventListener("load", heroTitleAnimation)

    return (
        <div className='hero' id='title'>
            <h1 className='hero1 fadeInRight revealHero'>Parallax and Effects</h1>
            <h1 className='hero2 fadeInLeft revealHero'>showcase</h1>
        </div>
    );
}

export default ParallaxTitle
    ;