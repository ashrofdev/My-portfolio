import React from 'react'
import './contact.css'
import { PageHeaderr, Btn } from '../LittleComponents/LittleComponents';
import Footer from '../LargeComponents/Footer/Footer'


const ContactPage = ({send}) => {
    return (
        <div className="contact page">
            <PageHeaderr title='CONTACT'/>
            <div className="map">
                <img src={require('../img/map.png') } alt=""/>
            </div>
            <div className="info">
                <div className="headin">
                    <span>Want To Connect</span> with Me 
                    <div>Fill the <span>Form</span></div>
                </div>
                <p>Send me a message</p>
                <form>
                    <label>
                        NAME
                        <input className='name' />
                    </label>
                    <label>
                        EMAIL ADDRESS
                        <input className='mail' type="email"/>
                    </label>
                    <label>
                        MESSAGE
                        <textarea className='msg'/>
                    </label>
                    <div onClick={send} className="send">SEND</div>
                </form>
            </div>
            <Footer/>
            <div className="person"></div>
        </div>
    )
}
export default ContactPage