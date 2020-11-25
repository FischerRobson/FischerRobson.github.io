import React from 'react'

import { Link } from 'react-router-dom'

import './styles.css'

const PageHeader = () => {

    return(
        <header className="page-header">
            
            <div className="header-content">
                <Link to="/" >
                    <h4>Home</h4>
                </Link>
            </div>

            <div className="header-content">
                <Link to="/aboutme" >
                    <h4>Aboute Me</h4>
                </Link>
            </div>

            <div className="header-content">
                <Link to="/projects" >
                    <h4>Projects</h4>
                </Link>
            </div>

            <div className="header-content">
                <Link to="/contact" >
                    <h4>Contact</h4>
                </Link>
            </div>
        </header>
    )

} 

export default PageHeader