import React from 'react'
import './work.css'
import { Heading } from '../../LittleComponents/LittleComponents';

const ashchat = () =>{
    window.location.href = "https://ashrofdev.github.io/A-chat"
}
const smartaco = () =>{
    window.location.href = "https://ashrofdev.github.io/smartACO"
}
const sb = () =>{
    window.location.href = "http://sb-ap.herokuapp.com"
}

const fork = () =>{
    window.location.href = "https://ashrofdev.github.io/forkify-in-react/"
}
const budject = () =>{
    window.location.href = "https://ashrofdev.github.io/Budject-App/"
}

const lr = () =>{
    window.location.href = "https://ashrofdev.github.io/lingual-robot/"
}

const Work = () => {
    return (
        <div className="work">
           <div>
           <Heading text={'CHECK MY LATEST WORKS'}/>
            <p>
                Checkout this awesome list of projects I have made for
                companies and my personal projects.
            </p>
           </div>
            <div>
            <div className="gallery">
                <figure className="fig fig1">
                    <img alt="" src={require('./portfolio/p1.png')}/>
                    <button onClick={smartaco}>visit site</button>
                </figure>
                <figure className="fig fig2">
                    <img alt="" src={require('./portfolio/p2.png')}/>
                    <button onClick={sb}>visit site</button>
                </figure>
                <figure className="fig fig3">
                    <img alt="" src={require('./portfolio/p3.png')}/>
                    <button onClick={lr}>visit site</button>
                </figure>
                <figure className="fig fig4">
                    <img alt="" src={require('./portfolio/p4.png')}/>
                    <button onClick={fork}>visit site</button>
                </figure>
                <figure className="fig fig5">
                    <img alt="" src={require('./portfolio/p5.png')}/>
                    <button onClick={ashchat}>visit site</button>
                </figure>
                <figure className="fig fig5">
                    <img alt="" src={require('./portfolio/p6.png')}/>
                    <button onClick={budject}>visit site</button>
                </figure>
            </div>
            </div>
        </div>
    )
}
export default Work