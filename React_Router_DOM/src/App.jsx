import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Nav from './component/nav'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>

      </Routes>
    </div>
  )
}

export default App