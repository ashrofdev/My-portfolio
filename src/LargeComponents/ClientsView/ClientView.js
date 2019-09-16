import React from 'react'
import './client.css'
import ServicesPage from '../../ServicesPage.js/Service'
import AboutMe from '../About/AboutMe'




const ClientView = ({person}) => {
   
    return (
        <div className="client">
            
            {person}
        </div>
    )
}
export default ClientView