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
                                <img src={require('./img/p1.png')}/>
                            <button >visit site</button>
                        </figure>
                        <figure className="fig fig4">
                                <img src={require('./img/p2.png')}/>
                            <button>visit site</button>
                        </figure>
                        <figure className="fig fig5">
                                <img src={require('./img/p3.png')}/>
                            <button >visit site</button>
                        </figure>
                        <figure className="fig fig5">
                                <img src={require('./img/p4.png')}/>
                            <button >visit site</button>
                        </figure>
                        <figure className="fig fig5">
                                <img src={require('./img/p5.png')}/>
                            <button >visit site</button>
                        </figure>
                        <figure className="fig fig5">
                                <img src={require('./img/p6.png')}/>
                            <button >visit site</button>
                        </figure>
                    </div>
                </div>

                <div className="static">
                    <h2>FUN & GAMES</h2>
                    <div className="gallery">
                        <figure className="fig fig3">
                                <img src={require('./img/p7.png')}/>
                            <button >visit site</button>
                        </figure>
                        <figure className="fig fig4">
                                <img src={require('./img/p8.png')}/>
                            <button>visit site</button>
                        </figure>
                        <figure className="fig fig5">
                                <img src={require('./img/p9.png')}/>
                            <button >visit site</button>
                        </figure>
                        <figure className="fig fig5">
                                <img src={require('./img/p10.png')}/>
                            <button >visit site</button>
                        </figure>
                        <figure className="fig fig5">
                                <img src={require('./img/p11.png')}/>
                            <button >visit site</button>
                        </figure>
                        <figure className="fig fig5">
                                <img src={require('./img/p12.png')}/>
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