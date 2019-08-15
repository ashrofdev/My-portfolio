import React from 'react'
import './home.css'
import { Btn, Heading, Logo } from '../LittleComponents/LittleComponents';
import Header from '../LargeComponents/Header';

const HomePage = () => {
    return (
        <div className="home">
            <Header/>
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