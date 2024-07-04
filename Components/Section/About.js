import React, { useContext } from 'react'
import { DetailsContext } from '../Hompage'
import Heading from '@/Snippet/Heading'
import ImageWithText from '@/Snippet/ImageWithText'
import img from "@/Images/banner2.jpeg"
import Image from 'next/image'

const About = () => {

    const data = useContext(DetailsContext)

    return (
        <>
            <section id="about" className='pt-70'>
                <Heading >Mysterious Me!!</Heading>
                <ImageWithText>
                    <div className='w-full sm:w-[50%] h-auto'>
                        <Image priority="true" src={img} alt="" className="w-[65%] m-auto" />
                    </div>
                    <div className='w-full sm:w-[50%] h-auto sm:mx-5'>
                        <p className='text-[18px] text-justify mb-3'>{data.shopify_b_1}</p>
                    </div>
                </ImageWithText>
                {/* <p className=' w-[65%] text-[18px] text-justify mb-3 m-auto'>{data.shopify_b_2}</p> */}
            </section>
        </>
    )
}

export default About