import ImageWithText from '@/Snippet/ImageWithText'
import img from "@/Images/banner.jpg"
import React, { useContext } from 'react'
import { DetailsContext } from '../Hompage'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const HeaderSection = () => {
    const data = useContext(DetailsContext)
    return (
        <section id="header">
            <ImageWithText>
                <div className='relative h-auto max-w-[90%] sm:max-w-[55%] flex justify-center flex-col gap-6'>
                    <heading>
                        <h1 className='font-bold text-[24px] sm:text-[32px] uppercase'>{data.name}</h1>
                        <h6 className='text-[16px] text-justify'>{data.subtitle}</h6>
                    </heading>
                    <p className='text-justify'>
                        {data.short}
                    </p>
                    <p className='font-bold text-gray-500 flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faLocationDot} width={"15px"} />
                        Dhaka, Bangladesh.
                    </p>
                    <div className='flex gap-2 items-center font-bold'>
                        <div className='relative flex h-3 w-3 items-center justify-center'>
                            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
                            <span className="relative inline-flex h-4/5 w-4/5 rounded-full bg-emerald-500"></span>
                        </div>
                        Available for new projects
                    </div>
                    <button className='cta_hire w-2/5 bg-blue font-bold border-2 rounded-md p-2'>Hire Me</button>
                </div>
                <div className='relative flex'>
                    <Image priority="true" src={img} alt="" className="w-[250px] h-auto m-auto border-white border-8" />
                    <div className='absolute top-[50px] right-[15px] sm:right-[-25px] z-[-1] m-auto bg-slate-300 h-[90%] border-transparent border-8 w-[250px] '></div>
                </div>
            </ImageWithText>
        </section>
    )
}

export default HeaderSection