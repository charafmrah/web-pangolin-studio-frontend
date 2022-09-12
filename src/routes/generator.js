import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import GeneratedImage from '../components/GeneratedImage'
import Footer from '../components/Footer'
import Title from '../components/Title'

const Generator = () => {
    return (
        <div>

            <Title title='YouTube Thumbnail Generator'/>

            <Search />

            <GeneratedImage />

        </div>
    )
}

export default Generator