import React from 'react'
import './Navbar.css'
import {MdAccountCircle} from 'react-icons/md'
import {IoIosArrowDown} from 'react-icons/io'
import logo from '../Images/logo.png'
function Navbar() {
  return (
    <div className='Navbar'>
         <img alt='logo' src={logo}></img>
       
            <ul className='Navbartext'>
                <li>My Assignment</li>
                <li>Chat with Mentor</li>
                <li className='Navaccount'><MdAccountCircle className='Navicon'/> ProfileName <IoIosArrowDown className='Navicon'/></li>
            </ul>
        
    </div>
  )
}

export default Navbar