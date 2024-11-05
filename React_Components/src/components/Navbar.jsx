import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex px-10 py-5 items-center justify-between bg-green-600 border">
        <h1 className="text-xl">Rudra</h1>
        <div className="flex gap-8 items-center">
          <h4 className="text-xl">About</h4>
          <h4 className="text-xl">Contact</h4>
          <h4 className="text-xl">Services</h4>
          <h4 className="text-xl">Your Account</h4>
        </div>
    </nav>
  )
}

export default Navbar