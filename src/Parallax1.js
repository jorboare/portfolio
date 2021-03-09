import React from 'react';
import { parallaxEffect } from './transitionsHelper'

const Parallax1 = () => {


    document.addEventListener("scroll", parallaxEffect)

    return (
        <section className='ParallaxSection' id='Parallax'>
            <div className='parallaxSection'>
                <h1>Parallax</h1>
                <div className='left1 parallax' data-axis="vertical" data-speed=".2" />
                <div className='right1 parallax' data-axis="vertical" data-speed="-.2" />
                <div className='left2 parallax' data-axis="vertical" data-speed=".25" />
                <div className='right2 parallax' data-axis="vertical" data-speed="-.25" />
                <div className='left3 parallax' data-axis="vertical" data-speed=".3" />
                <div className='right3 parallax' data-axis="vertical" data-speed="-.3" />
                <div className='left4 parallax' data-axis="vertical" data-speed=".35" />
                <div className='right4 parallax' data-axis="vertical" data-speed="-.35" />
                <div className='left5 parallax' data-axis="vertical" data-speed=".4" />
                <div className='right5 parallax' data-axis="vertical" data-speed="-.4" />
            </div>
        </section>
    );
}

export default Parallax1;