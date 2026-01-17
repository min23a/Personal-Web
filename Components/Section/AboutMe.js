import React, { useContext } from 'react'
import { Heading, SubHeading } from '@/Snippet/Typograph'
import ImageWithText from '@/Snippet/ImageWithText'
import img1 from "@/Images/banner2.jpeg"
import img2 from "@/Images/merchbanner.png"
import Image from 'next/image'
import { DetailsContext } from '../Layout'

const AboutMe = () => {

    const data = useContext(DetailsContext)

    return (
        <>
            <section id="about" className='pt-3 w-full'>
                <Heading cls="animate-on-scroll animate-fade-up" >Mysterious About Me!!</Heading>
                <p className='text-center w-full m-auto p-3 animate-on-scroll animate-fade-up mb-3 sm:mb-6 text-[18px] sm:text-[20px] lg:text-[22px]'>
                    {data.common_desc_short}
                </p>
                <ImageWithText cls="mb-3 sm:mb-6">
                    <div className='w-full sm:w-[50%] h-auto animate-on-scroll animate-fade-left flex items-center'>
                        <Image priority="false" src={img2} alt="" className="w-full" />
                    </div>
                    <div className='w-full sm:w-[50%] h-auto content-center animate-on-scroll animate-fade-right'>
                        <SubHeading>As a Merchandiser:</SubHeading>
                        <p className='text-[18px] sm:text-[20px] lg:text-[22px] text-left m-auto mb-3 sm:mb-6'>
                            {data.mer_desc}
                        </p>
                    </div>
                </ImageWithText>
                <ImageWithText>
                    <div className='w-full sm:w-[50%] h-auto content-center  animate-on-scroll animate-fade-left'>
                        <SubHeading>As a Developer:</SubHeading>
                        <p className='text-[18px] sm:text-[20px] lg:text-[22px] text-left m-auto mb-3 sm:mb-6'>
                            {data.shopify_desc}
                        </p>
                    </div>
                    <div className='w-full sm:w-[50%] h-auto  animate-on-scroll animate-fade-right'>
                        <Image priority="false" src={img1} alt="" className="w-full" />
                    </div>
                </ImageWithText>
            </section>
        </>
    )
}

export default AboutMe