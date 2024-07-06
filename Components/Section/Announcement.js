import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Announcement = () => {
    return (
        <>
            <div className='flex items-center justify-center gap-3'>
                <FontAwesomeIcon icon={faWrench} width="15px" />
                <p>
                    Big update comming soon!!!
                </p>
            </div>
        </>
    )
}

export default Announcement