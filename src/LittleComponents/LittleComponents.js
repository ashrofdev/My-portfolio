import React from 'react'
import './lc.css'

export const Btn = ({text}) => {
    return <button className="btn">{text}</button>
}

export const Heading = ({text}) => {
    return <h2 className="heading">{text}</h2>
}
export const Logo = () => {
    return (
        <div className="logo">
            <img src={require('./logo/logo2.png')} />
        </div>
    )
}