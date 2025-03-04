import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import TrainingsPage from './components/Trainings/TrainingsPage';
import BlogPage from './components/Blog/BlogPage';
import ProductsPage from './components/Products/ProductsPage';
import ContactsPage from './components/Contacts/ContactPage';
import Product from './components/Products/Product';

import {Routes, Route } from "react-router";


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path ={"/"} element ={<HomePage/>}/>
      <Route path ={"/contact"} element ={<ContactsPage/>}/>
      <Route path ={"/about"} element ={<AboutPage/>}/>
      <Route path ={"/blog"} element ={<BlogPage/>}/>
      <Route path ={"/products"} element ={<ProductsPage/>}/>
      <Route path="products/:id" element={<Product />} />
      <Route path ={"/trainings"} element ={<TrainingsPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App