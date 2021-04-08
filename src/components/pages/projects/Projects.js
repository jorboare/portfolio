import React from 'react';
import Fourketta from './images/cook.png'
import EnterTheBlock from './images/game.png'
import Bingewapp from './images/films.png'
import Taks from './images/task.png'
const projects = () => {
    return (
        <section className='projects-section' id='projects'>
            <h2>Proyectos</h2>

            <div className='projects'>
                <div className='project-1 project-col'>

                    <a href='https://fourketta.herokuapp.com/' target='_blank' rel="noreferrer">
                        <img src={Fourketta} alt='proyecto de Cocina' />
                        <h3>FourkettA</h3>
                        <div className='description'>
                            <p>Organizador de recetas con tintes de red social. Single-Page Application basado en ReactJS para el Frontend y en ExpressJS para el backend a la hora de gestionar la API REST.</p>
                        </div>
                    </a>

                </div>

                <div className='project-2 project-col'>

                    <a href='https://bingewapp.herokuapp.com/' target='_blank' rel="noreferrer">
                        <img src={Bingewapp} alt='proyecto de Cine' />
                        <h3>_bingewapp</h3>

                        <div className='description'>
                            <p>Web de búsqueda y organización de cine y series. Ejecutada bajo ExpressJS y con vistas de Handlebars. Contenido provisto desde la API TheMovieDB.</p>
                        </div>
                    </a>

                </div>

                <div className='project-3 project-col'>

                    <a href='https://jorboare.github.io/Enter-The-Block-Game/' target='_blank' rel="noreferrer">
                        <img src={EnterTheBlock} alt='proyecto de Videojuego' />
                        <h3>Enter The Block</h3>
                        <div className='description'>
                            <p>Primer nivel de un videojuego que funciona como tutorial. Creado con Canvas.</p>
                        </div>

                    </a>
                </div>
                <div className='project-4 project-col'>

                    <a href='https://mern-tasks-jb.netlify.app/' target='_blank' rel="noreferrer">
                        <img src={Taks} alt='proyecto de organizador de tareas' />
                        <h3>MERN Tasks</h3>
                        <div className='description'>
                            <p>Proyecto MERN de gestión de tareas utilizando hooks.</p>
                        </div>

                    </a>
                </div>
            </div>
        </section>
    );
}

export default projects;