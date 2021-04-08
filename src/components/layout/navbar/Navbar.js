import React from 'react';
import { stickyNavbar } from '../../../transitionsHelper'
import MenuHamburger from './Hamburger_icon.svg.png'
const Navigation = () => {

    document.addEventListener('scroll', stickyNavbar)

    const handleMenuBtn = () => {
        document.querySelector('.drop-menu').classList.contains('visible') ?

            document.querySelector('.drop-menu').classList.remove('visible')
            :
            document.querySelector('.drop-menu').classList.add('visible')

    }
    return (
        <>
            <nav className='navbar'>
                <a href="#hero" className='scrollto' className='brand'>JB</a>
                <nav className="mr-auto">
                    <ul>
                        <li><a href="#hero" >Inicio</a></li>
                        <li><a href="#aboutMe">Sobre mí</a></li>
                        <li><a href="#feature">Mi código</a></li>
                        <li><a href="#technologies">Tecnologías</a></li>
                        <li><a href="#projects">Proyectos</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>

                <button className='menu-btn' onClick={handleMenuBtn}><img src={MenuHamburger} alt='menu' /></button>
            </nav>
            <div className='drop-menu'>
                <ul>
                    <li><a href="#hero" onClick={handleMenuBtn}>Inicio</a></li>
                    <li><a href="#aboutMe" onClick={handleMenuBtn}>Sobre mí</a></li>
                    <li><a href="#feature" onClick={handleMenuBtn}>Mi código</a></li>
                    <li><a href="#technologies" onClick={handleMenuBtn}>Tecnologías</a></li>
                    <li><a href="#projects" onClick={handleMenuBtn}>Proyectos</a></li>
                    <li><a href="#contact" onClick={handleMenuBtn}>Contacto</a></li>
                </ul>
            </div>

        </>
    );
}

export default Navigation;