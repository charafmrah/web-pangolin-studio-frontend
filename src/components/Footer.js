import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='flex  justify-center md:justify-end text-white text-sm md:text-base mt-20'>
            <div className='md:flex md:justify-end'>
                <nav className='flex flex-col-reverse text-center md:flex-row justify-center md:gap-5 align-middle'>
                <a href='https://webpangolin.com' target={'_blank'}>Built with passion By Web Pangolin</a>
                    <NavLink to='/privacy'>Privacy Policy</NavLink>
                    <NavLink to='terms'>Terms Of Service</NavLink>
                </nav>
            </div>
        </footer>
    )
}

export default Footer