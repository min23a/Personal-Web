import React, { useContext } from 'react'
import Heading from '@/Snippet/Heading'
import ImageWithText from '@/Snippet/ImageWithText'
import img from "@/Images/banner2.jpeg"
import Image from 'next/image'
import SubHeading from '@/Snippet/SubHeading'
import { DetailsContext } from '../Layout'

const About = () => {

    const data = useContext(DetailsContext)

    return (
        <>
            <section id="about" className='pt-3 w-full'>
                <Heading >Mysterious About Me!!</Heading>
                <p className='text-justify w-full m-auto p-3'>
                    {data.common_desc}
                </p>
                <ImageWithText>
                    <div className='w-full sm:w-[50%] h-auto'>
                        <Image priority="true" src={img} alt="" className="w-full" />
                    </div>
                    <div className='w-full sm:w-[50%] h-auto content-center'>
                        <SubHeading>As a Merchandiser:</SubHeading>
                        <p className='text-[18px] text-justify m-auto mb-3'>
                            {data.mer_desc}
                        </p>
                    </div>
                </ImageWithText>
                <ImageWithText>
                    <div className='w-full sm:w-[50%] h-auto content-center'>
                        <SubHeading>As a Developer:</SubHeading>
                        <p className='text-[18px] text-justify m-auto mb-3'>
                            {data.shopify_desc}
                        </p>
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