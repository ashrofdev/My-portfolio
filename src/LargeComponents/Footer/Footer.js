import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
           <div className="det">
            <img src={require('../../img/logo/logo.png')} />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Neque officiis repellendus voluptas exercitationem numquam 
                modi? Quisquam aliquid consequatur ipsa adipisci.
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