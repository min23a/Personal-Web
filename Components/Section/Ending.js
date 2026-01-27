import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Ending = ({ cls }) => {
    return (
        <>
            <div className={`w-full sm:max-w-[1200px] p-3 flex items-center justify-center gap-3 m-auto ${cls}`}>
                <FontAwesomeIcon icon={faCopyright} width={"15px"} className='w-[25px] sm:w-[15px]' />
                <span>{new Date().getFullYear()} Md Minhazul Abedin. All rights reserved.</span>
            </div>
        </>
    )
}

export default Ending