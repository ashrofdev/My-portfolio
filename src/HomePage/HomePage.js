import React from 'react'
import './home.css'
import Header from '../LargeComponents/Header/Header';
import AboutMe from '../LargeComponents/About/AboutMe';
import Work from '../LargeComponents/Work/Work';
import ClientView from '../LargeComponents/ClientsView/ClientView';
import NewsLetter from '../LargeComponents/News/News';
import Footer from '../LargeComponents/Footer/Footer';

const HomePage = () => {
    return (
        <div className="home page">
            <Header/>
            <AboutMe/>
            <Work/>
            <ClientView/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}
export default HomePage