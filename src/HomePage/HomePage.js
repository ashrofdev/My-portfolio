import React from 'react'
import './home.css'
import Header from '../LargeComponents/Header/Header';
import AboutMe from '../LargeComponents/About/AboutMe';
import Work from '../LargeComponents/Work/Work';
import ClientView from '../LargeComponents/ClientsView/ClientView';
import HireNow from '../LargeComponents/Hire/Hire';
import Footer from '../LargeComponents/Footer/Footer';



const HomePage = ({person, more, contact}) => {
    return (
        <div className="home page">
            <Header contact={contact}/>
            <AboutMe/>
            <button className="con-link" onClick={contact}>CONTACT ME</button>
            <Work/>
            <button className="more" onClick={more}>SHOW MORE</button>
            <ClientView person={person}/>
            <HireNow contact={contact}/>
            <Footer/>
        </div>
    )
}
export default HomePage