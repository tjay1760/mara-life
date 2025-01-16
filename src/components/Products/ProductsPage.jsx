import React from 'react'
import Hero from './Hero'
import Products from './Products'
import RegistrationForm from './RegistrationForm'

const ProductsPage = () => {
  return (
    <div className='product-page'>
      <Hero/>
      <Products/>
      <RegistrationForm/>
    </div>
  )
}

export default ProductsPage