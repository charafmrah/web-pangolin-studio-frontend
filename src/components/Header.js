import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className='flex flex-col gap-5 md:flex-row w-full md:justify-between items-center bg-transparent  pt-10'>
           <div className='shrink-0 '>
                <img src='logo1000.png' alt='logo' className='h-16 w-16' />
           </div>
           <div className=''>
            <nav className='flex gap-10 text-white text-xl md:text-2xl underline'>
                <Link to='/'>Home</Link> 
                <Link to='/generator'>Generator</Link>
                <Link to='/about'>About</Link>
                <Link to='/account'>Account</Link>
            </nav>
           </div> 
        </div>
    )
}

export default Header