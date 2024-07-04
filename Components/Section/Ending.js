import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Ending = () => {
    return (
        <>
            <div className='w-full sm:max-w-[1200px] p-3 flex items-center gap-3'>
                <FontAwesomeIcon icon={faCopyright} width={"15px"} className='w-[25px] sm:w-[15px]' />
                <span>This website was build by DevHive. Copyright 2024.</span>
            </div>
        </>
    )
}

export default Ending