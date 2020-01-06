import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
           <div className="det">
            <img alt="logo" src={require('../../img/logo/logo.png')} />
            <p>
                Coding websites from scratch is what I love doing best :)
            </p>
            <div className="foot">
                <span>&copy; All RIghts Reserved By Smarto</span>
                <div className="icons">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-pinterest"></i>
                    <i className="fa fa-google"></i>
                </div>
            </div>
           </div>
        </div>
    )
}
export default Footer