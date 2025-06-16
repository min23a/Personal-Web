import React from 'react'

const SubHeading = ({ children, id }) => {
    return (
        <>
            <h3 id={id ? id : ""} className='font-bold text-left text-[16px] capitalise my-3'>{children}</h3>
        </>
    )
}

export default SubHeading