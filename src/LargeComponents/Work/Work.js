import React from 'react'
import './work.css'
import { Heading } from '../../LittleComponents/LittleComponents';

const Work = () => {
    return (
        <div className="work">
            <Heading text={'CHECK MY LATEST WORKS'}/>
            <p>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Sunt minus iste a quod neque fugit explicabo
             tempore pariatur repellat asperiores?
            </p>
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
                    <img alt="" />
                </figure>
                <figure className="fig2">
                    img
                    <img alt="" />
                </figure>
                <figure className="fig3">
                    img
                    <img alt="" />
                </figure>
                <figure className="fig4">
                    img
                    <img alt="" />
                </figure>
                <figure className="fig5">
                    img
                    <img alt="" />
                </figure>
            </div>
        </div>
    )
}
export default Work