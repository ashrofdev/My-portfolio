import React from 'react'
import './about.css'
import { PageHeaderr, About } from '../LittleComponents/LittleComponents';
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
                             
                         </div>
                     </div>
                </div>
            </div>
        </div>
    )
}
export default AboutPage