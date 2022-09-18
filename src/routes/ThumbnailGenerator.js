import React from 'react'
import ThumbnailSearch from '../components/ThumbnailSearch'
import GeneratedImage from '../components/GeneratedImage'

const ThumbnailGenerator = () => {
    return (
        <div>

            <h1>YouTube Thumbnail Generator</h1>

            <ThumbnailSearch />

            <GeneratedImage />

        </div>
    )
}

export default ThumbnailGenerator