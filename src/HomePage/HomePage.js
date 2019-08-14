import React from 'react'
import './home.css'
import { Btn, Heading, Logo } from '../LittleComponents/LittleComponents';

const HomePage = () => {
    return (
        <div className="home">
            Welcome to my Home Page
            <p>just started building the portfolio</p>
            <Btn text={'DOWNLOAD NOW'}/>
            <Heading text={'Testing the heading component'} />
            <Heading text={'Creating another heading'} />
            <Heading text={'Creating a new heading'} />
            <Heading text={'Creating a heading'} />
            <Logo/>
        </div>
    )
}
export default HomePage