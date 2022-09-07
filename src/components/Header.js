import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <div className='flex flex-col gap-5 md:flex-row w-full md:justify-between items-center bg-transparent  pt-10'>
           <div className='shrink-0 '>
                <img src='logo1000.png' alt='logo' className='h-16 w-16' />
           </div>
           <div className=''>
            <nav className='flex gap-10 text-white text-xl md:text-2xl underline'>
                <NavLink to='/'>Home</NavLink> 
                <NavLink to='/generator'>Generator</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/account'>Account</NavLink>
            </nav>
           </div> 
        </div>
    )
}

export default Header