import React from 'react'

const GeneratedImage = () => {
    return (
        <div className='mt-5 text-center'>
            <img className='w-full' alt='AI generated image' src='flower-thumbnail.png'>

            </img>
            <button className="w-full mt-2 inline-flex justify-center rounded-md border border-transparent bg-slate-200 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                Download
            </button>
        </div>
    )
}

export default GeneratedImage