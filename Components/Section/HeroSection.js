import React from 'react'
import Slider from './Slider'
import bg from "@/Images/banner2.jpeg";
import { Heading, SubHeading, CTA } from '@/Snippet/Typograph';
import ImgwithBG from '@/Snippet/ImgwithBG';

const HeroSection = () => {
  return (
    <ImgwithBG bg={bg}>
      <div className='text-center w-[50%] text-white bg-black bg-opacity-80 p-8 rounded-md animate-on-scroll animate-fade-up'>
        <Heading>Welcome to My Portfolio</Heading>
        <Slider loop={true} autoplay={true} resumeDelay={2500} arrows={false} dots={false} className="h-fit py-3 text-center flex-column justify-center items-center">
          <SubHeading cls='text-2xl sm:text-4xl font-bold typing max-w-min'>Web Developer</SubHeading>
          <SubHeading cls='text-2xl sm:text-4xl font-bold typing max-w-min'>Designer</SubHeading>
          <SubHeading cls='text-2xl sm:text-4xl font-bold typing max-w-min'>Content Creator</SubHeading>
        </Slider>
        <CTA>Explore More...</CTA>
      </div>
    </ImgwithBG>
  )
}

export default HeroSection