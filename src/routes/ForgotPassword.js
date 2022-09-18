import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className='w-full md:w-2/3 flex flex-col justify-center'>
        <div className='w-full border-2 shadow-md shadow-black bg-white rounded-lg pb-16 md:pb-24 mt-16 my-2'>
            <h1 className='text-secondary'>Password Reset</h1>

            <div className='flex justify-center mt-5'>
                <form className='flex flex-col justify-center w-3/5'>
                    <label className='text-gray-600 text-xl mt-5'>Email</label>
                    <input className='border-2 rounded-lg p-2 mt-2' type='email' placeholder='you@domain.com' />



                    <button className='bg-primary hover:bg-secondary text-white text-xl mt-5 p-2 rounded-lg'>Send Reset Link</button>
                    <Link to='/login' className='text-primary text-center text-2xl mt-5'>Log In</Link>
                </form>
            </div>

        </div>
        <p className=' text-white text-xl mt-5'>Don't have an account? <Link to='/signup' className='text-primary'>Sign Up</Link></p>
    </div>
  )
}

export default ForgotPassword