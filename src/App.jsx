import React from 'react'
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Home/HomePage';
import {Routes, Route } from "react-router";
import {}


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      <HomePage/>
      </Routes>
      
    <>
  )
}

export default App