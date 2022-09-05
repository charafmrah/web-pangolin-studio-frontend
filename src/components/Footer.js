import React from 'react'

const Footer = () => {
    return (
        <footer className='flex justify-center md:justify-end text-white text-sm md:text-base mt-20'>
            <div className='md:flex md:justify-end'>
                <nav className='flex flex-col-reverse text-center md:flex-row justify-center md:gap-5 align-middle'>
                    <a href='https://webpangolin.com'>Built with passion By Web Pangolin</a>
                    <a href=''>Privacy Policy</a>
                    <a href=''>Terms Of Service</a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer