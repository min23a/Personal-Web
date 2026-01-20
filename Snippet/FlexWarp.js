import React from 'react'

const FlexWarp = ({ children, className }) => {
    return (
        <section className={'flex flex-wrap justify-evenly ' + (className ? className : '')}>
            {children}
        </section>
    )
}

export default FlexWarp