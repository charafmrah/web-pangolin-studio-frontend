import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import GeneratedImage from '../components/GeneratedImage'
import Footer from '../components/Footer'

const Generator = () => {
    return (
        <div>

            <h1 className='flex justify-center text-center text-3xl md:text-6xl text-white mt-16 md:mt-24 mb-18 '>
                YouTube Thumbnail Generator
            </h1>

            <Search />

            <GeneratedImage />

        </div>
    )
}

export default Generator