import React from 'react'

import { Link } from 'react-router-dom'

import { SiCdprojekt, SiNintendoswitch, SiEa, SiNetflix, SiAmazon, SiHbo } from 'react-icons/si'
import { FiMusic } from 'react-icons/fi'

import Internacional from '../../images/internacional.png'
import Eagles from '../../images/eagles.png'
import Liquid from '../../images/liquid.png'
import Bayern from '../../images/bayern.png'

import './styles.css'

const AbouteMe = () => {

    return(
               
            <div className="content-aboutme">

                <h2>Aboute Me</h2>

                <p>
                    Who am I? Well, I am a student passionate about technology, video games, football and heavy metal.
                    I spend most of my time playing or studying, sometimes reading a fantasy book.   
                    I work as technical support in a software company and in my study time I always try to stay on top of the news in the WEB world,
                    so much so that my focus of studies is focused on this area; my interests are React and Node.JS, besides already having a good experience with PHP and JS.
                </p>

                <h4>My favorite games </h4>
                
                <ul>
                    <li>The Elder Scrolls V: Skyrim</li>
                    <li>The Witcher 3: Wild Hunt <SiCdprojekt/></li>
                    <li>Dark Souls 2</li>
                    <li>The Lengend of Zelda: Breath of The Wild <SiNintendoswitch/></li>
                    <li>Fifa <SiEa/></li>
                    <li>Battlefield 1</li>
                </ul>

                <h4>My favorite series </h4>
                
                <ul>
                    <li>Band of Brothers <SiHbo/> </li>
                    <li>The Boys <SiAmazon/></li>
                    <li>Dark <SiNetflix/></li>
                    <li>Game of Thrones <SiHbo/></li>
                    <li>Peaky Blinders <SiNetflix/></li>
                </ul>

                <h4> Sports / Esports </h4>

                <p className="center">Football is a world passion! This fantastic and charming sport involves passion,
                     emotion and teamwork, and I am proud to show my team at heart:</p>
                
                <figure>
                    <img src={Internacional} />
                </figure>

                <p className="center">Other teams that I support in sports/esports:</p>

                <div className="images-sports">
                    <img src={Eagles} />
                    <img src={Liquid} />
                    <img src={Bayern} />
                </div>

                <h4> Music </h4>

                <p className="center">My favorite style is heavy metal, songs with hero themes and a lot of guitar song <FiMusic/> </p>

            </div>

            

        
    )

} 

export default AbouteMe