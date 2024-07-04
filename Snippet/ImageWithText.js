import React from 'react'

const ImageWithText = ({ children }) => {
    return (
        <section className='flex flex-col sm:flex-row justify-between gap-12 max-w-full my-4 p-2'>
            {children}
        </section>
    )
}

export default ImageWithText