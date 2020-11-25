import React from 'react'


import { FaWhatsapp, FaGithub, FaInstagram  } from 'react-icons/fa'
import { SiMapbox } from 'react-icons/si'

import './styles.css'

import mapPin from '../../images/mapPin.png'

import 'leaflet/dist/leaflet.css'

import Leaflet from 'leaflet'

import { Map, TileLayer, Marker } from 'react-leaflet'



const mapIcon = Leaflet.icon({
    iconUrl: mapPin,
    iconSize: [58, 88],
    iconAnchor: [29, 98],
    popupAnchor: [170, 2]
})
const Contact = () => {

    return(
        <div id="page-map">

            <aside>
                <header>
                    <h2>WHERE FIND ME?</h2>
                    <p>In the map you can find my home in Limeira/SP, Brasil <SiMapbox /> </p>
                </header>

                <footer>
                    <h2>Contact</h2>

                    <div className="main-content">
                        <p><FaWhatsapp/> <a href="https://api.whatsapp.com/send?phone=5519992866886&text=ola%20Robson,%20tudo%20bem?"  target="_blank">+55 (19) 99286 6886</a> </p> 
                        <p><FaInstagram/> <a href="https://www.instagram.com/fischer_robson/"  target="_blank">fischer_robson</a> </p>
                        <p><FaGithub/> <a href="https://github.com/FischerRobson/" target="_blank">Robson Fischer</a> </p>
                    </div>
                </footer>
            </aside>

            <Map 
                 center={ [-22.5836998, -47.3217262] }
                 zoom={15}
                 style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                <Marker
                    position={ [-22.5836998, -47.3217262] }
                    icon={ mapIcon }     
                >

                </Marker>

            </Map>

        </div>
    )

} 

export default Contact