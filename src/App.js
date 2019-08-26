import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import NavBar from './LittleComponents/NavBar';
import { ifStatement } from '@babel/types';

class App extends Component {

  constructor() {
    super()
    this.state={
      page: 'home'
    }
  }

  onPageChange = (route) => {
    this.setState({page: route})
  }


  render() {
    return (
      <div className="App">
      <NavBar onPageChange={this.onPageChange}/>
      { this.state.page === 'home'
          ? <div>
              <HomePage />
            </div>
          : (
            this.state.page === 'about'
             ?  <div>
                  {'about page'}
                </div>
             : (
            this.state.page === 'blog'
             ?  <div>
                  {'blog page'}
                </div>
             : (
              this.state.page === 'portfolio'
              ?  <div>
                    {'portfolio page'}
                  </div>
              :  (
                this.state.page === 'services'
                ?  <div>
                      {'services page'}
                    </div>
                : (
                  this.state.page === 'contact'
                  ?  <div>
                        {'contact page'}
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
