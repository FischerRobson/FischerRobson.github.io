import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import PageHeader from './components/Header'

import Home from './Pages/Home'
import AbouteMe from './Pages/AbouteMe'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

function Routes () {
    return(
        <BrowserRouter >
            <PageHeader />
            <Route path="/" exact component={Home} />
            <Route path="/aboutme" exact component={AbouteMe} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact" exact component={Contact} />
        </BrowserRouter>
    )
}

export default Routes