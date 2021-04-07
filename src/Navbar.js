import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { stickyNavbar } from './transitionsHelper'

const Navigation = () => {

    document.addEventListener('scroll', stickyNavbar)

    return (

        <Navbar>
            <Navbar.Brand href="#hero" className='scrollto'>Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#hero">Home</Nav.Link>
                <Nav.Link href="#aboutMe" className='scrollto'>Sobre mí</Nav.Link>
                <Nav.Link href="#feature" className='scrollto'>Mi código</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>

    );
}

export default Navigation;