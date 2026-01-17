import ImageWithText from '@/Snippet/ImageWithText'
import img from "@/Images/banner4.jpeg"
import React, { useContext } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { DetailsContext } from '../Layout'
import Slider from './Slider'
import { ReadMore } from '@/Snippet/Typograph'

const HeaderSection = () => {
    const data = useContext(DetailsContext)
    return (
        <section id="header" className=' pt-3 sm:pt-6 lg:pt-8 pb-4 sm:pb-8 lg:pb-16 h-[80vh]'>
            <ImageWithText>
                <div className='relative h-auto max-w-[100%] sm:max-w-[60%] flex justify-center flex-col gap-6 animate-on-scroll animate-fade-up'>
                    <heading>
                        <h1 className='font-bold text-[24px] sm:text-[32px] uppercase'>{data.name}</h1>
                        <Slider loop={true} autoplay={true} delay={4000} arrows={false} margin="0" dots={true} className="h-auto flex justify-start items-center">
                            {data.main_subtitle.map((subtitle, index) => (
                                <h4 key={index} className='text-[14px] sm:text-[24px] font-bold text-justify typing max-w-min'>{subtitle}</h4>
                            ))}
                        </Slider>
                    </heading>
                    <ReadMore contentClassName='text-justify animate-fade text-[16px] sm:text-[20px]' lines={3}>
                        {data.main_desc}
                    </ReadMore>
                    <p className='font-bold text-gray-500 flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faLocationDot} width={"15px"} />
                        Budapest, Hungary.
                    </p>
                    <div className='flex gap-2 items-center font-bold'>
                        <div className='relative flex h-3 w-3 items-center justify-center'>
                            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
                            <span className="relative inline-flex h-4/5 w-4/5 rounded-full bg-emerald-500"></span>
                        </div>
                        Available for new projects
                    </div>
                    <Link href="/contact">
                        <button className='cta_hire w-2/5 text-white animate-bounce transition-colors duration-1000 bg-secondary hover:bg-indigo-500 font-bold border-2 rounded-md p-2'>
                            Ask Quote
                        </button>
                    </Link>
                </div>
                <div className='relative flex animate-on-scroll animate-fade-up'>
                    <Image priority="true" src={img} alt="" className="w-[250px] h-auto m-auto border-white border-8" />
                </div>
            </ImageWithText>
        </section>
    )
}

export default HeaderSection