import React from 'react'

const Header = () => {
    return(
        <div className='flex flex-col gap-5 md:flex-row w-full md:justify-between items-center bg-transparent  pt-10'>
           <div className='shrink-0 '>
                <img src='logo1000.png' alt='logo' className='h-16 w-16' />
           </div>
           <div className=''>
            <nav className='flex gap-10 text-white text-xl md:text-2xl underline'>
                <a href='/'> Generator </a>
                <a href=''> About </a>
                <a href=''> Sign In </a>
            </nav>
           </div> 
        </div>
    )
}

export default Header