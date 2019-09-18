import React from 'react'
import './home.css'
import Header from '../LargeComponents/Header/Header';
import AboutMe from '../LargeComponents/About/AboutMe';
import Work from '../LargeComponents/Work/Work';
import ClientView from '../LargeComponents/ClientsView/ClientView';
import NewsLetter from '../LargeComponents/News/News';
import Footer from '../LargeComponents/Footer/Footer';



const HomePage = ({person, more}) => {
    return (
        <div className="home page">
            <Header/>
            <AboutMe/>
            <Work/>
                <button className="more" onClick={more}>SHOW MORE</button>
            <ClientView person={person}/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}
export default HomePage