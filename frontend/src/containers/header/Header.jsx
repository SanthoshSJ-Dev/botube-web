import React from 'react';
import './header.css';
import laptop from '../../assets/laptop.png'


const Header = () => {
  return (
    <div className='botube__header section__padding' id='home'>
      <div className='botube__header-content'>
        <h1 className='gradient__text'>Try it now and take your YouTube channel to the next level!</h1>
        <p className=''>The fully automated bot for creating stunning videos for your YouTube channel!</p>

        <div className='botube__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
      </div>
      <div className='botube__header-image'>
        <img src={laptop} alt='Laptop' />
      </div>
    </div>


  )
}

export default Header
