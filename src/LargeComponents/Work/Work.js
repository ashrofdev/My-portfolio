import React from 'react'
import './work.css'
import { Heading } from '../../LittleComponents/LittleComponents';

const ashchat = () =>{
    window.location.href = "http://ashchat.herokuapp.com"
}
const smartaco = () =>{
    window.location.href = "http://smartaco.herokuapp.com"
}
const sb = () =>{
    window.location.href = "http://sb-ap.herokuapp.com"
}

const Work = () => {
    return (
        <div className="work">
           <div>
           <Heading text={'CHECK MY LATEST WORKS'}/>
            <p>
                Checkout this awesome list of my projects which includes
                staitc projects dynamic projects and some fun projects.
            </p>
           </div>
            <div>
            <div className="gallery">
                <figure className="fig fig1">
                    <img src={require('./portfolio/p1.png')}/>
                    <button onClick={ashchat}>visit site</button>
                </figure>
                <figure className="fig fig2">
                    <img src={require('./portfolio/p2.png')}/>
                    <button onClick={ashchat}>visit site</button>
                </figure>
                <figure className="fig fig3">
                    <img src={require('./portfolio/p3.png')}/>
                    <button onClick={sb}>visit site</button>
                </figure>
                <figure className="fig fig4">
                    <img src={require('./portfolio/p4.png')}/>
                    <button onClick={smartaco}>visit site</button>
                </figure>
                <figure className="fig fig5">
                    <img src={require('./portfolio/p5.png')}/>
                    <button onClick={ashchat}>visit site</button>
                </figure>
                <figure className="fig fig5">
                    <img src={require('./portfolio/p6.png')}/>
                    <button onClick={ashchat}>visit site</button>
                </figure>
            </div>
            </div>
        </div>
    )
}
export default Work