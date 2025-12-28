import { faGear, faHandsClapping, faWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Slider from './Slider'

const Announcement = () => {
    return (
        <>
            <Slider arrows={true} dots={false} loop={true} autoplay={true} className="bg-black text-white text-center p-2">
                <div className='flex items-center justify-center gap-3'>
                    <FontAwesomeIcon icon={faHandsClapping} width="15px" />
                    <p>
                        Now you can contact me through email...
                    </p>
                </div>
                <div className='flex items-center justify-center gap-3'>
                    <FontAwesomeIcon icon={faWrench} width="15px" />
                    <p>
                        Big update comming soon!!!
                    </p>
                </div>
                <div className='flex items-center justify-center gap-3'>
                    <FontAwesomeIcon icon={faGear} width="15px" />
                    <p>
                        Please wait for it...
                    </p>
                </div>

            </Slider>

        </>
    )
}

export default Announcement