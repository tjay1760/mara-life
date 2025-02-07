import React from 'react'
import Hero from './Hero'
import ProductsSlider from './Products'
import RegistrationForm from './RegistrationForm'

const ProductsPage = () => {
  return (
    <div className='product-page'>
      <Hero/>
      <ProductsSlider/>
      <RegistrationForm/>
    </div>
  )
}

export default ProductsPage