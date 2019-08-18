import React from 'react'
import './header.css'
import {Logo} from '../../LittleComponents/LittleComponents' 

const Header = () => {
    return (
        <div className="header">
            <div className="content">
                <div className="top">
                    <Logo/>
                    {'navigation'}
                </div>
                <div className="bottom">
                    <div className="text">
                        <h2>HEY! THERE</h2>
                        <h1>I AM SMITH</h1>
                        <h2>A PROFESSIONAL DEVELOPER</h2>
                    </div>
                    <div className="img">
                        <img src={require('./slider/man2.png')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

