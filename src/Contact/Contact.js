import React from 'react'
import './contact.css'
import { PageHeaderr } from '../LittleComponents/LittleComponents';


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
            </div>
        </div>
    )
}
export default ContactPage