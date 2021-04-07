import React from 'react';
import Stack from './technologies.png'
const Technologies = () => {


    return (
        <div className='technologies-section'>

            <div md={6} className='technologies-img'>
                <img src={Stack} alt='Stack MERN' className='tech-img' />
            </div>

        </div>

    );
}

export default Technologies;