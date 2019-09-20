import React from 'react'
import './about.css'
import { PageHeaderr, Brand } from '../LittleComponents/LittleComponents';
import AboutMe from '../LargeComponents/About/AboutMe';
import Footer from '../LargeComponents/Footer/Footer'

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
                    <p>Here is the list of languages i use to build websites</p>
                     <div className="items">
                         <div className="item">
                             <div className="number">01.</div>
                             <div className="title">HTML5</div>
                             <p className="text">
                                HTML is used to produce the content of a website.
                                for example, rendering (texts, images, and others).
                             </p>
                         </div>
                         <div className="item">
                             <div className="number">02.</div>
                             <div className="title">CSS3 & SASS</div>
                             <p className="text">
                                Both CSS and SASS are both used to define the style 
                                of the content that has already been rendered by HTML.
                             </p>
                         </div>
                         <div className="item">
                             <div className="number">03.</div>
                             <div className="title">JavaScript (React)</div>
                             <p className="text">
                                With React.js, (one of the most popular JavaScript
                                 framework), you can build the perfect functionality
                                 for your website with high speed and accuracy.
                             </p>
                         </div>
                         <div className="item">
                             <div className="number">04.</div>
                             <div className="title">Node.js</div>
                             <p className="text">
                                This is a popular back-end language that manages
                                the server side of a website.
                             </p>
                         </div>
                     </div>
                </div>
            </div>
            <div className="brand">
                <Brand/>
            </div>
            <Footer/>
            <div className="person"></div>
        </div>
    )
}
export default AboutPage