import React from 'react'

const FlexWarp = ({ children }) => {
    return (
        <section className='flex flex-wrap justify-evenly'>
            {children}
        </section>
    )
}

export default FlexWarp