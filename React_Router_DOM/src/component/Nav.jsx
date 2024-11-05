import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="flex px-10 py-5 items-center justify-between bg-green-600 border">
        <h1 className="text-xl">Rudra</h1>
        <div className="flex gap-8 items-center">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
            <Link to='/contact'>Contact</Link>
          
        </div>
    </nav>
  )
}

export default Nav