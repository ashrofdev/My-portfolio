import React from 'react'
import './work.css'
import { Heading } from '../../LittleComponents/LittleComponents';

const Work = () => {
    return (
        <div className="work">
           <div>
           <Heading text={'CHECK MY LATEST WORKS'}/>
            <p>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Sunt minus iste a quod neque fugit explicabo
             tempore pariatur repellat asperiores?
            </p>
           </div>
            <div>
            <ul>
                <li>ALL</li>
                <li>UI&UX</li>
                <li>WEB DESIGN</li>
                <li>APP DESIGN</li>
                <li>SKETCH DESIGN</li>
            </ul>
            <div className="gallery">
                <figure className="fig1">
                    img
                    <img alt="" src={require('./portfolio/p1.jpg')} />
                </figure>
                <figure className="fig2">
                    img
                    <img alt="" src={require('./portfolio/p2.jpg')} />
                </figure>
                <figure className="fig3">
                    img
                    <img alt="" src={require('./portfolio/p3.jpg')} />
                </figure>
                <figure className="fig4">
                    img
                    <img alt="" src={require('./portfolio/p4.jpg')} />
                </figure>
                <figure className="fig5">
                    img
                    <img alt="" src={require('./portfolio/p5.jpg')} />
                </figure>
            </div>
            </div>
        </div>
    )
}
export default Work