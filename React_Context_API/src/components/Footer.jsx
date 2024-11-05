import React, { useContext } from "react";
import { DataContext } from '../context/UserContext'

const Footer = () => {
    const data =useContext(DataContext)
  return (
    <div><h1>Footer {data.age}</h1></div>
  )
}

export default Footer