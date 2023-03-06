import React from 'react'

import { Footer, Blog, Header } from './containers';
import { Wbotube, Navbar } from './components';

import './app.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Footer/>      
    </div>
  )
}

export default App