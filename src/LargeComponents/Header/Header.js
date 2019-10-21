import React from 'react'
import './header.css'
import { Btn } from '../../LittleComponents/LittleComponents'
import 'font-awesome/css/font-awesome.min.css'


const Header = () => {
    return (
        <div className="header">
            <div className="content">
                <div className="bottom">
                    <div className="text">
                        <h2>HEY! THERE</h2>
                        <h1>I AM ASHRAF</h1>
                        <h2>A PROFESSIONAL DEVELOPER</h2>
                        <Btn text={'HIRE ME'}/>
                    </div>
                    <div className="img">
                        <img alt="" src={require('./slider/man2.png')} />
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

