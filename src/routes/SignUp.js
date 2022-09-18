import React from 'react'
import PageTitle from '../components/PageTitle.js'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
<div className='w-2/3 flex flex-col justify-center'>
        <div className='border-2 shadow-md shadow-black bg-white rounded-lg pb-16 md:pb-24 mt-16 mx-2 my-2'>
            <PageTitle title='Sign Up' className=''/>

            <div className='flex justify-center mt-5'>
                <form className='flex flex-col justify-center w-3/5'>
                    <label className='text-gray-600 text-xl mt-5'>Email</label>
                    <input className='border-2 rounded-lg p-2 mt-2' type='email' placeholder='you@domain.com' />

                    <label className='text-gray-600 text-xl mt-5'>Password</label>
                    <input className='border-2 rounded-lg p-2 mt-2' type='password' placeholder='password' />

                    <label className='text-gray-600 text-xl mt-5'>Confirm Password</label>
                    <input className='border-2 rounded-lg p-2 mt-2' type='password' placeholder='password' />

                    <button className='bg-primary hover:bg-secondary text-white text-xl mt-5 p-2 rounded-lg'>Sign up</button>
                </form>
            </div>

        </div>
        <p className=' text-white text-xl mt-5'>Already have an account? <Link to='/login' className='text-primary'>Log In</Link></p>
    </div>
  )
}

export default SignUp