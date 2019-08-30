import React from 'react'
import './about.css'
import { PageHeaderr, Brand } from '../LittleComponents/LittleComponents';
import AboutMe from '../LargeComponents/About/AboutMe';

const AboutPage = () => {
    return (
        <div className="page">
            <PageHeaderr title='ABOUT ME'/>
            <AboutMe/>

            <div className="offers">
                <div className="my-pic">
                    <img src={require('./about/about2.jpg')} />
                </div>
                <div className="detail">
                    <h2 className="head">I AM AN EXPERT ON</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Blanditiis dolor placeat et
                     quasi aperiam earum </p>
                     <div className="items">
                         <div className="item">
                             <div className="number">01.</div>
                             <div className="title">UI&UX DESIGN</div>
                             <p className="text">Blanditiis dolor placeat et
                             quasi aperiam earum</p>
                         </div>
                         <div className="item">
                             <div className="number">02.</div>
                             <div className="title">UI&UX DESIGN</div>
                             <p className="text">Blanditiis dolor placeat et
                             quasi aperiam earum</p>
                         </div>
                         <div className="item">
                             <div className="number">03.</div>
                             <div className="title">UI&UX DESIGN</div>
                             <p className="text">Blanditiis dolor placeat et
                             quasi aperiam earum</p>
                         </div>
                         <div className="item">
                             <div className="number">04.</div>
                             <div className="title">UI&UX DESIGN</div>
                             <p className="text">Blanditiis dolor placeat et
                             quasi aperiam earum</p>
                         </div>
                     </div>
                </div>
            </div>
            <div className="brand">
                <Brand/>
            </div>
        </div>
    )
}
export default AboutPage