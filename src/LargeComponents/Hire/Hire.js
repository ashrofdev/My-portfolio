import React from 'react'
import './hire.css'
import {Heading} from '../../LittleComponents/LittleComponents'

const HireNow = ({contact}) => {
    return (
        <div className="news">
            <Heading text={'HIER ME FOR YOUR PROJECT'} />
            <button className="btn" onClick={contact}>HIRE ME</button>
        </div>
    )
}
export default HireNow