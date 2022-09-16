import React from 'react'
import ThumbnailSearch from '../components/ThumbnailSearch'
import GeneratedImage from '../components/GeneratedImage'
import PageTitle from '../components/PageTitle'

const ThumbnailGenerator = () => {
    return (
        <div>

            <PageTitle title='YouTube Thumbnail Generator'/>

            <ThumbnailSearch />

            <GeneratedImage />

        </div>
    )
}

export default ThumbnailGenerator