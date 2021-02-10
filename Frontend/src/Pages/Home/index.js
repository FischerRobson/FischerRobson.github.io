import React from 'react'

import './styles.css'

import Me from '../../images/me.jpg'

const Home = () => {

    return(
        <div className="content-home">
            <div className="me-intro">
                <img src={Me} />
                <h2>hi, i'm Robson!</h2>
                <h3>Web Developer and Student</h3>
                <span>Student at UNICAMP(Universidade Estadual de Campinas).
                    Front End dev at Intesis Tecnologia.
                     Born in 2000, brazilian.
                </span>
            </div>
        </div>
    )

} 

export default Home