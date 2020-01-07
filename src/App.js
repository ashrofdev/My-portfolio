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

//  https://accounts.google.com/b/0/DisplayUnlockCaptcha

const test = [<Person1/>, <Person2/>, <Person3/>]

class App extends Component {

  constructor() {
    super()
    this.state={
      page: 'home',
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
          document.querySelectorAll('.grade').forEach((e)=>{
            e.classList.add('animate')
          })
        } 
      } else if (this.state.page==='about') {
        document.querySelectorAll('.grade').forEach((e)=>{
          e.classList.add('animate')
        })
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

  aboutPage = () => {
    this.setState({page: 'about'})
  }

  more=()=>{
    this.setState({page: 'portfolio'})
  }

  //https://cryptic-cliffs-40445.herokuapp.com/send-message
  
  sendMessage= ()=>{
    document.querySelector('.pop').textContent = 'SENDING...'
    document.querySelector('.pop').classList.add('popup')


    fetch('https://portapi.herokuapp.com/contact-me')
    .then((data)=>{
      document.querySelector('.pop').textContent = 'SENT'
      setTimeout(() => {
        document.querySelector('.pop').classList.remove('popup')
      }, 2000);
      console.log(data)
    })
    .catch((err)=>{
      document.querySelector('.pop').textContent = 'FAILED'
      document.querySelector('.pop').classList.add('fail')
      setTimeout(() => {
        document.querySelector('.pop').classList.remove('popup')
        document.querySelector('.pop').classList.remove('fail')
      }, 2000);
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
              <HomePage person={this.state.person} more={this.more} contact={this.contact} aboutPage={this.aboutPage}/>
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
                  this.state.page === 'contact'
                  ?  <div>
                        <ContactPage send={this.sendMessage}/>
                      </div>
                  : {}
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
     