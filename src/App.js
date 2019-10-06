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
import { Person1, Person2, Person3 } from './LittleComponents/LittleComponents'

const test = [<Person1/>, <Person2/>, <Person3/>]

class App extends Component {

  constructor() {
    super()
    this.state={
      page: 'contact',
      person: test[0],
      story: false
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({person: test[1]})
      document.querySelector('.person').classList.add('person-show')
      setTimeout(() => {
          document.querySelector('.person').classList.remove('person-show')
      }, 2000); 
      setTimeout(() => {
        this.setState({person: test[2]})
        document.querySelector('.person').classList.add('person-show')
        setTimeout(() => {
            document.querySelector('.person').classList.remove('person-show')
        }, 2000); 
        setTimeout(() => {
            this.setState({person: test[0]})
            document.querySelector('.person').classList.add('person-show')
            setTimeout(() => {
                document.querySelector('.person').classList.remove('person-show')
            }, 2000); 
        }, 3000); 
      }, 3000); 
    }, 9000)

    window.addEventListener('scroll', (e)=> {
      if (this.state.page==='home') {
        if(e.currentTarget.scrollY >= 350) {
            document.querySelector('.abilities').classList.add('test')
            document.querySelector('.grade').classList.add('grade-show')
        } else {
            document.querySelector('.abilities').classList.remove('test')
        }
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
  contact = () => {
    this.setState({page: 'contact'})
  }

  more=()=>{
    this.setState({page: 'portfolio'})
  }

  sendMessage=()=>{
    fetch('http://localhost:3002/contact-me', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        name: document.querySelector('.name').value,
        email: document.querySelector('.mail').value,
        message: document.querySelector('.msg').value
      })
    }).catch((err)=>{
      console.log(err)
    })
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
              <HomePage person={this.state.person} more={this.more} contact={this.contact}/>
            </div>
          : (
            this.state.page === 'about'
             ?  <div>
                  <AboutPage contact={this.contact}/>
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
                      <ServicesPage person={this.state.person}/>
                    </div>
                : (
                  this.state.page === 'contact'
                  ?  <div>
                        <ContactPage send={this.sendMessage}/>
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
     