import React from 'react'
import './header.css'
import {Logo, Btn} from '../../LittleComponents/LittleComponents'
import NavBar from '../../LittleComponents/NavBar'
import 'font-awesome/css/font-awesome.min.css'


const Header = () => {
    return (
        <div className="header">
            <div className="content">
                <div className="top">
                    <Logo/>
                    <NavBar/>
                </div>
                <div className="bottom">
                    <div className="text">
                        <h2>HEY! THERE</h2>
                        <h1>I AM SMITH</h1>
                        <h2>A PROFESSIONAL <span className="">{}</span></h2>
                        <Btn text={'HIRE ME'}/>
                    </div>
                    <div className="img">
                        <img src={require('./slider/man2.png')} />
                    </div>
                </div>
            </div>
            <div className="socials">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-pinterest"></i>
                <i className="fa fa-google"></i>
            </div>
        </div>
    )
}

export default Header

