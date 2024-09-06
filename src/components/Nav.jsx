import React from 'react'
import headerLogo from '../assets/images/header-logo.svg'
import { navLinks } from '../constants/index.js'
import { hamburger } from '../assets/icons/index.js'

const Nav = () => {
  return <>
  <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex justify-between items-center max-container'>
        <a href="/">
        <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className='flex gap-20 justify-center items-center flex-1 max-lg:hidden'>
            {navLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.href} className='info-text'>{item.label}</a>   
                </li>                 
            ))}
</ul>
<div className='hidden max-lg:block'>
    <img src={hamburger} alt="hamburger-icon" width={25} height={25} />
</div>
    </nav>
  </header>
    </>
}


export default Nav
