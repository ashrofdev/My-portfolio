import React from 'react'
import './contact.css'
import { PageHeaderr } from '../LittleComponents/LittleComponents';
import Footer from '../LargeComponents/Footer/Footer'


const ContactPage = ({send}) => {
    return (
        <div className="contact page">
            <div className="pop"></div>
            <PageHeaderr title='CONTACT ME'/>
            <div className="map">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360029.60172721854!2d3.7781450136
                214825!3d7.6424803959716465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ee290dccd869%3A0x
                a0d07d72883f4e8a!2sAbiola%20Rd%2C%20Ibadan!5e0!3m2!1sen!2sng!4v1574724379468!5m2!1sen!2sng" width="100%" 
                height="100%" frameBorder="0"  allowFullScreen=""></iframe>  
                          </div>
            <div className="info">
                <div className="headin">
                    <span>Want To Connect</span> with Me 
                    <div>Fill the <span>Form</span></div>
                </div>
                <div>
                    <p>📞  +2348169094945</p>
                    <p>📨 salmanashraf853@gmail.com</p>
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