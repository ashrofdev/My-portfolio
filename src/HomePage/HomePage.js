import React from 'react'
import './home.css'
import { Btn } from '../LittleComponents/LittleComponents';

const HomePage = () => {
    return (
        <div className="home">
            Welcome to my Home Page
            <p>just started building the portfolio</p>
            <Btn text={'DOWNLOAD NOW'}/>
        </div>
    )
}
export default HomePage