import React from 'react'
import './contact.css'
import { PageHeaderr } from '../LittleComponents/LittleComponents';
import Footer from '../LargeComponents/Footer/Footer'


const ContactPage = () => {
    return (
        <div className="contact page">
            <PageHeaderr title='CONTACT'/>
            <div className="map">
                <img src={require('../img/map.png')}/>
            </div>
            <div className="info">
                <div className="headin">
                    <span>Want To Connect</span> with Us 
                    <div>Here is Our <span>Contact Information</span></div>
                </div>
                <p>Send us a message</p>
                <form>
                    <label>
                        NAME
                        <input />
                    </label>
                    <label>
                        EMAIL ADDRESS
                        <input type="email"/>
                    </label>
                    <label>
                        MESSAGE
                        <textarea/>
                    </label>
                </form>
            </div>
            <Footer/>
            <div className="person"></div>
        </div>
    )
}
export default ContactPage