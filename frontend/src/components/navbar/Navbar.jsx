import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/logo.png';

import './navbar.css';

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wbotube'>What is BoTube</a></p>
    <p><a href='#products'>Products</a></p>
    <p><a href='#about'>About</a></p>
  </>

)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='botube__navbar'>
      <div className='botube__navbar-links'>
        <div className='botube__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='botube__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='botube__navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='botube__navbar-menu'>

        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className='botube__navbar-menu_container scale-up-center'>
            <div className='botube__navbar-menu_container-links'>
              <Menu/>
              <div className='botube__navbar-menu_container-links-sign'>
                <p>Sign In</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
