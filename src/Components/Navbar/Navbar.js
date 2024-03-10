import React, { useEffect, useState } from 'react';
import './Navbar.css'
import logo from '../../Assets/logo.png'
import menu_icon from '../../Assets/menu-icon.png'
import { Link } from 'react-scroll';


const Navbar = () => {

  const[sticky,setSticky] = useState(false);

 useEffect(()=>{
     window.addEventListener('scroll',()=>{
      window.scrollY > 50  ? setSticky(true): setSticky(false);
     })
 },[])

 const [mobileMenu, setmobileMenu] = useState(false)
 const toggleMenu = ()=>{
  mobileMenu ? setmobileMenu(false) : setmobileMenu(true)

 }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : '' }`}>
        <img src={logo} alt=""  className='logo'/>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'} >
            <li> <Link to='hero' smooth = {true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth = {true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth = {true} offset={-105} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth = {true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth = {true} offset={-260} duration={500}>Testimonials</Link></li>
            <li> <Link className='btn'to='contact' smooth = {true} offset={-230} duration={500}>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
}

export default Navbar;
