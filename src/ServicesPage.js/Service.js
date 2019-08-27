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
                features
            </div>
        </div>
    )
}
export default ServicesPage