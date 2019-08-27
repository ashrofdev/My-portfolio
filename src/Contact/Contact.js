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
            
        </div>
    )
}
export default ContactPage