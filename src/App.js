import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import NavBar from './LittleComponents/NavBar';
import { Logo, ScrollUp } from './LittleComponents/LittleComponents'
import PortfolioPage from './PortfolioPage/Portfolio';
import AboutPage from './AboutPage/AboutPage';
import BlogPage from './BlogPage/BlogPage';
import ServicesPage from './ServicesPage.js/Service';
import ContactPage from './Contact/Contact';

class App extends Component {

  constructor() {
    super()
    this.state={
      page: 'home'
    }
  }
  componentDidMount() {
      window.addEventListener('scroll', (e)=> {
          if (this.state.page==='home') {
            if(e.currentTarget.scrollY >= 350) {
                document.querySelector('.abilities').classList.add('test')
                document.querySelector('.grade').classList.add('grade-show')
            } else {
                document.querySelector('.abilities').classList.remove('test')
            }
            console.log(e.currentTarget.pageYOffset)
          } else if (this.state.page==='about') {
            document.querySelector('.abilities').classList.add('test')
          }
          if(e.currentTarget.scrollY >= 400) {
            document.querySelector('.scroller').classList.add('sshow')
          } else {
            document.querySelector('.scroller').classList.remove('sshow')
          }
      })
    
  }

  onPageChange = (route) => {
    this.setState({page: route})
    console.log(route)
    document.querySelector('.nav .list').classList.remove('show')
    document.querySelector('.nav-btn').classList.remove('n-btn')
  }


  render() {
    return (
      <div className="App">
        <div className="topp">
          <div className="top">
            <Logo  onPageChange={this.onPageChange}/>
            <NavBar onPageChange={this.onPageChange}/>
            <ScrollUp/>
          </div>
        </div>
      { this.state.page === 'home'
          ? <div>
              <HomePage />
            </div>
          : (
            this.state.page === 'about'
             ?  <div>
                  <AboutPage/>
                </div>
             : (
            this.state.page === 'blog'
             ?  <div>
                  <BlogPage/>
                </div>
             : (
              this.state.page === 'portfolio'
              ?  <div>
                    <PortfolioPage/>
                  </div>
              :  (
                this.state.page === 'services'
                ?  <div>
                      <ServicesPage/>
                    </div>
                : (
                  this.state.page === 'contact'
                  ?  <div>
                        <ContactPage/>
                      </div>
                  : {}
                  )
                )
              )
            )
            )
        }
      </div>
    );
  }
}

export default App;
     