import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import NavBar from './LittleComponents/NavBar';
import { Logo } from './LittleComponents/LittleComponents'
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
            }else {
                document.querySelector('.abilities').classList.remove('test')
                console.log('bye')
            }
            console.log(e.currentTarget.pageYOffset)
          }
      })
    
  }

  onPageChange = (route, e) => {
    this.setState({page: route})
    console.log(route)
  }


  render() {
    return (
      <div className="App">
        <div className="topp">
          <div className="top">
            <Logo/>
            <NavBar onPageChange={this.onPageChange}/>
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
