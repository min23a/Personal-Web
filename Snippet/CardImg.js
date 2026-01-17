import Image from 'next/image'
import React from 'react'

const CardImg = ({ cls, img, w, h }) => {
    return (
        <div className={cls ? cls + ' max-w-[400px] max-h-[400px]' : 'max-w-[400px] max-h-[400px]'}>
            <Image priority="false" width={w} height={h} src={img} alt="" />
        </div>
    )
}

export default CardImg