import React from 'react'

const Header = () => {
    return(
        <div className='flex justify-between items-center bg-transparent pl-20 pt-10 pr-20'>
           <div className='shrink-0 '>
                <img src='logo1000.png' alt='logo' className='h-16 w-16' />
           </div>
           <div className=''>
            <nav className='flex gap-10 text-white text-2xl'>
                <a href=''> Home </a>
                <a href=''> Blog </a>
                <a href=''> Account </a>
            </nav>
           </div> 
        </div>
    )
}

export default Header