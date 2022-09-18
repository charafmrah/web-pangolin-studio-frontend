import React from 'react'
import Search from '../components/ThumbnailSearch'
import GeneratedTitles from '../components/GeneratedTitles'

const TitleGenerator = () => {
    return (
        <div>

            <h1>YouTube Title Generator</h1>

            <Search />

            <GeneratedTitles />

        </div>
    )
}

export default TitleGenerator