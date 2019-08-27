import React from 'react'
import './service.css'
import { PageHeaderr } from '../LittleComponents/LittleComponents';

const ServicesPage = () => {
    return (
        <div className="services page">
            <PageHeaderr title='SERVICES'/>
            <div className="img">
                <img src={require('../img/services/s1.jpg')} />
            </div>
            <div className="features">
                <div className="ex">
                    <span>Our</span> Exclusive 
                    <div>Services <span>For You</span></div>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Fugit praesentium earum non sit 
                    sint ipsum.
                    </p>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Fugit praesentium.
                    </p>
                </div>
                <div className="feas">
                    <div className="feature">
                        <i className="fa fa-smile-o"></i>
                        <h3>UI&UX DESIGN</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur 
                            adipisicing elit. Fugit praesentium.
                        </p>
                    </div>
                    <div className="feature">
                        <i className="fa fa-code"></i>
                        <h3>UI&UX DESIGN</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur 
                            adipisicing elit. Fugit praesentium.
                        </p>
                    </div>
                    <div className="feature">
                        <i className="fa fa-tablet"></i>
                        <h3>UI&UX DESIGN</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur 
                            adipisicing elit. Fugit praesentium.
                        </p>
                    </div>
                    <div className="feature">
                        <i className="fa fa-paint-brush"></i>
                        <h3>UI&UX DESIGN</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur 
                            adipisicing elit. Fugit praesentium.
                        </p>
                    </div>
                    <div className="feature">
                        <i className="fa fa-camera"></i>
                        <h3>UI&UX DESIGN</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur 
                            adipisicing elit. Fugit praesentium.
                        </p>
                    </div>
                    <div className="feature">
                        <i className="fa fa-bullhorn"></i>
                        <h3>UI&UX DESIGN</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur 
                            adipisicing elit. Fugit praesentium.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServicesPage