import React from 'react'
import Search from '../components/ThumbnailSearch'
import GeneratedImage from '../components/GeneratedImage'
import PageTitle from '../components/PageTitle'
import GeneratedTitles from '../components/GeneratedTitles'

const TitleGenerator = () => {
    return (
        <div>

            <PageTitle title='YouTube Title Generator'/>

            <Search />

            <GeneratedTitles />

        </div>
    )
}

export default TitleGenerator