import React from 'react'
import Search from '../components/Search'
import GeneratedImage from '../components/GeneratedImage'
import PageTitle from '../components/PageTitle'

const Generator = () => {
    return (
        <div>

            <PageTitle title='YouTube Thumbnail Generator'/>

            <Search />

            <GeneratedImage />

        </div>
    )
}

export default Generator