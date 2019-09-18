import React from 'react'
import './port.css'
import Work from '../LargeComponents/Work/Work';
import Footer from '../LargeComponents/Footer/Footer';
import { PageHeaderr } from '../LittleComponents/LittleComponents';


const PortfolioPage = () => {
    return (
        <div className="page">
            <PageHeaderr title='PORTFOLIO'/>
            <div className="body">
                <Work/>
                <div className="static">
                    <h2>STATIC PROJECTS</h2>
                    <div className="gallery">
                        <figure className="fig fig3">
                            <video loop autoPlay>
                                <source src={require('./letme.mov')}/>
                            </video>
                            <button >visit site</button>
                        </figure>
                        <figure className="fig fig4">
                            <video loop autoPlay>
                                <source src={require('./slide.mov')}/>
                            </video>
                            <button>visit site</button>
                        </figure>
                        <figure className="fig fig5">
                            <video loop autoPlay>
                                <source src={require('./hunter.mov')}/>
                            </video>
                            <button >visit site</button>
                        </figure>
                        <figure className="fig fig5">
                            <video loop autoPlay>
                                <source src={require('./natours.mov')}/>
                            </video>
                            <button >visit site</button>
                        </figure>
                        <figure className="fig fig5">
                            <video loop autoPlay>
                                <source src={require('./nexter.mov')}/>
                            </video>
                            <button >visit site</button>
                        </figure>
                        <figure className="fig fig5">
                            <video loop autoPlay>
                                <source src={require('./trillo.mov')}/>
                            </video>
                            <button >visit site</button>
                        </figure>
                    </div>
                </div>

                <div className="static">
                    <h2>FUN & GAMES</h2>
                    <div className="gallery">
                        <figure className="fig fig5">
                            <video loop autoPlay>
                                <source src={require('./pig.mov')}/>
                            </video>
                            <button >visit site</button>
                        </figure>
                        <figure className="fig fig5">
                            <video loop autoPlay>
                                <source src={require('./maths.mov')}/>
                            </video>
                            <button >visit site</button>
                        </figure>
                        <figure className="fig fig5">
                            <video loop autoPlay>
                                <source src={require('./hangman.mov')}/>
                            </video>
                            <button >visit site</button>
                        </figure>
                        <figure className="fig fig5">
                            <video loop autoPlay>
                                <source src={require('./sweet.mov')}/>
                            </video>
                            <button >visit site</button>
                        </figure>
                    </div>
                </div>
            </div>
            <Footer/>
            <div className="person"></div>
        </div>
    )
}

export default PortfolioPage