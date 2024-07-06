import React, { useContext } from 'react'
import { DetailsContext } from '../Hompage'
import Heading from '@/Snippet/Heading'
import ImageWithText from '@/Snippet/ImageWithText'
import img from "@/Images/banner2.jpeg"
import Image from 'next/image'
import SubHeading from '@/Snippet/SubHeading'

const About = () => {

    const data = useContext(DetailsContext)

    return (
        <>
            <section id="about" className='pt-70 w-full'>
                <Heading >Mysterious Me!!</Heading>
                <p className='text-justify w-full m-auto p-3'>
                    {data.common_desc}
                </p>
                <SubHeading>As a Merchandiser:</SubHeading>
                <ImageWithText>
                    <div className='w-full sm:w-[50%] h-auto'>
                        <Image priority="true" src={img} alt="" className="w-full" />
                    </div>
                    <div className='w-full sm:w-[50%] h-auto content-center'>
                        <p className='text-[18px] text-justify m-auto mb-3'>{data.mer_desc}</p>
                    </div>
                </ImageWithText>
                <SubHeading>As a Developer:</SubHeading>
                <ImageWithText>
                    <div className='w-full sm:w-[50%] h-auto content-center'>
                        <p className='text-[18px] text-justify m-auto mb-3'>{data.shopify_desc}</p>
                    </div>
                    <div className='w-full sm:w-[50%] h-auto'>
                        <Image priority="true" src={img} alt="" className="w-full" />
                    </div>
                </ImageWithText>
            </section>
        </>
    )
}

export default About