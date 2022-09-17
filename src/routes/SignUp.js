import React from 'react'
import PageTitle from '../components/PageTitle.js'

const SignUp = () => {
  return (
    <div className='flex flex-col justify-center'>
        <div className=' border-2 shadow-md shadow-black bg-white rounded-lg pb-16 md:pb-24 mt-16 mx-2 my-2 w-96'>
            <PageTitle title='Sign Up' className=''/>

            <div className='flex justify-center'>
                <form className='flex flex-col justify-center w-3/5'>
                    <label className='text-gray-600 text-xl mt-5'>Email</label>
                    <input className='border-2 rounded-lg p-2 mt-2' type='email' placeholder='Username' />

                <label className='text-gray-600 text-xl mt-5'>Password</label>
                    <input className='border-2 rounded-lg p-2 mt-2' type='password' placeholder='Email' />

                    <button className='bg-primary text-white text-xl mt-5 p-2 rounded-lg'>Sign Up</button>
                </form>
            </div>

        </div>
        <p className=' text-white text-xl mt-5'>Already have an account? <a href='/account' className='text-primary'>Sign In</a></p>
    </div>
  )
}

export default SignUp