import React from "react"

const Title = (props) => {
    return (
            <h1 className='flex justify-center text-center text-3xl md:text-6xl text-white mt-16 md:mt-24 mb-18 '>
                {props.title}
            </h1>
    )
}

export default Title