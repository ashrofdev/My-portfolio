import React from 'react'
import './about.css'
import {Heading, About} from '../../LittleComponents/LittleComponents'

const AboutMe = () => {
    return (
        <div className="about">
            <div className="top">
                <Heading text={'SOME WORDS ABOUT ME'}/>
                <p>Lorem ipsum, dolor sit amet consectetur
                 adipisicing elit. Blanditiis dolor placeat et
                  quasi aperiam earum impedit quod ea iste totam.</p>
            </div>
            <About/>
        </div>
    )
}
export default AboutMe