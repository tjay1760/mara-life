import React from 'react'
import { useForm } from 'react-hook-form'

const RegistrationForm = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const onSubmit = (data) => {        
    console.log(data);
  }
  return (
    <div className='mt-10 bg-gray-100 w-11/12 mx-auto p-2 flex flex-col items-center justify-center text-center'>
      
      <h1 className='text-green-950 font-bold text-2xl'>Pesticide Registration Assistance Form</h1>
      <p>Please fill out the form below to register your pesticide product with our assistance program.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-holder">
          <button>
            
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm