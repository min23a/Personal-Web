import React from 'react'

const Heading = ({ children, id }) => {
    return (
        <>
            <h1 id={id ? id : ""} className='font-bold text-center text-[20px] uppercase m-4 my-6'>{children}</h1>
            <hr />
        </>
    )
}

export default Heading