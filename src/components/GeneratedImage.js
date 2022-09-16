import React from 'react'
import { useState } from 'react'

const GeneratedImage = () => {

    const [image, setImage] = useState('flower-thumbnail.png')

    return (
        <div className='mt-4 text-center'>
            <img className='w-full' alt='AI generated image' src={image}>

            </img>
            <button className="w-full mt-2 inline-flex justify-center rounded-md border border-transparent bg-slate-200 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Download
            </button>
        </div>
    )
}

export default GeneratedImage