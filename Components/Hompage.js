import React from 'react'
import HeaderSection from './Section/HeaderSection';
import Skills from './Section/Skills';
import AboutMe from './Section/AboutMe';
import Ending from './Section/Ending';
import HeroSection from './Section/HeroSection';
import Pagewidth from '@/Snippet/Pagewidth';
import UpworkReviews from './Section/UpworkReviews';
import { upworkReviews } from '@/Data/upworkReviews';
import ProjectsSec from './Section/ProjectsSec';

const Hompage = () => {
    return (
        <>
            <Pagewidth>
                <HeaderSection />
                <ProjectsSec />
                <AboutMe />
                <Skills />
                <UpworkReviews cls="bg-black rounded-xl my-2 sm:my-4 lg:my-6 shadow-lg shadow-indigo-500/20 py-8 px-5 animate-on-scroll animate-fade-up text-white" reviews={upworkReviews} />
                <Ending />
            </Pagewidth>
        </>
    )
}

export default Hompage