import React from 'react'
import './about.css'
import {Heading, About} from '../../LittleComponents/LittleComponents'


const AboutMe = () => {
    return (
        <div className="about">
            <div className="top">
                <Heading text={'SOME WORDS ABOUT ME'}/>
            </div>
            <About/>
        </div>
    )
}
export default AboutMe