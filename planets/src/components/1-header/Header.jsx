import React, { useState } from 'react'

import './header.css'

const Header = ({ setPlanetEndPoint, isMobile }) => {

    let [MenuOpen, setMenuOpen] = useState(false);


    let planets = [
        { name: 'MERCURY', endpoint: '0', color: '#419EBB' },
        { name: 'VENUS', endpoint: '1', color: '#EDA249' },
        { name: 'EARTH', endpoint: '2', color: '#6D2ED5' },
        { name: 'MARS', endpoint: '3', color: '#D14C32' },
        { name: 'JUPITER', endpoint: '4', color: '#D83A34' },
        { name: 'SATURN', endpoint: '5', color: '#CD5120' },
        { name: 'URANUS', endpoint: '6', color: '#1EC1A2' },
        { name: 'NEPTUNE', endpoint: '7', color: '#2D68F0' },
    ];


    return (

        <div className='headerContainer'>

            <h1>the planets</h1>

            <ul className='headerList' style={{ display: isMobile ? 'none' : '' }}>


                {planets.map((planet) => (
                    <li key={planet.name}>

                        <a
                            onClick={() => {

                                setPlanetEndPoint(planet.endpoint);
                            }}
                        >
                            {planet.name}
                        </a>

                    </li>

                ))}


            </ul>

            <img className='hamburger'
                style={{ display: isMobile ? '' : 'none' }}
                src="./assets/icon-hamburger.svg"
                alt=""
                onClick={() => {
                    setMenuOpen(!MenuOpen);
                }} />

            <div className={`sideMenu ${MenuOpen ? 'open' : ''}`}>
                {/* <button className="closeMenu" onClick={() => setMenuOpen(false)}>✕</button> */}

                <ul className=''>

                    {planets.map((planet) => (

                        <li 

                        onClick={() => {
                            setPlanetEndPoint(planet.endpoint);
                            setMenuOpen(false); // Close menu after selection
                        }} 
                        key={planet.name}>

                            <div className='sideMenuListItem'>

                                <div className='sideMenuList '>

                                    <span className='dot' style={{ backgroundColor: planet.color }} ></span>

                                    <a>
                                        {planet.name}
                                    </a>



                                </div>

                                <img className='chevron' src="./assets/icon-chevron.svg" alt="" />
                            </div>
                            <div className='devider2'></div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Header;