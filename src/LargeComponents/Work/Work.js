import React from 'react'
import './work.css'
import { Heading } from '../../LittleComponents/LittleComponents';

const ashchat = () =>{
    window.location.href = "http://ashchat.herokuapp.com"
}
const smartaco = () =>{
    window.location.href = "http://smartaco.herokuapp.com"
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
                    <video loop autoPlay>
                        <source src={require('./portfolio/achat.mov')}/>
                    </video>
                    <button onClick={ashchat}>visit site</button>
                </figure>
                <figure className="fig fig2">
                    <video loop autoPlay>
                        <source src={require('./portfolio/forkify.mov')}/>
                    </video>
                    <button onClick={ashchat}>visit site</button>
                </figure>
                <figure className="fig fig3">
                    <video loop autoPlay>
                        <source src={require('./portfolio/smartbrain.mov')}/>
                    </video>
                    <button onClick={ashchat}>visit site</button>
                </figure>
                <figure className="fig fig4">
                    <video loop autoPlay>
                        <source src={require('./portfolio/smataco.mov')}/>
                    </video>
                    <button onClick={smartaco}>visit site</button>
                </figure>
                <figure className="fig fig5">
                    <video loop autoPlay>
                        <source src={require('./portfolio/budject.mov')}/>
                    </video>
                    <button onClick={ashchat}>visit site</button>
                </figure>
                <figure className="fig fig5">
                    <video loop autoPlay>
                        <source src={require('./portfolio/lingual.mov')}/>
                    </video>
                    <button onClick={ashchat}>visit site</button>
                </figure>
            </div>
            </div>
        </div>
    )
}
export default Work