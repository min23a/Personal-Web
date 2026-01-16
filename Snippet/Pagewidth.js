import React from 'react'

const Pagewidth = ({ children }) => {
    return (
        <section className="w-[80vw] m-auto max-w-[1200px]">
            {children}
        </section>
    )
}

export default Pagewidth