import React from 'react'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5"
import '../Navbar/Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/">Shop</Link>
            <Link to="/Cart">
                <IoCartOutline fontSize='32'/>    
            </Link>


        </div>
    </div>
  )
}

export default Navbar