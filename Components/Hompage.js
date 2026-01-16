import React from 'react'
import HeaderSection from './Section/HeaderSection';
import Skills from './Section/Skills';
import About from './Section/About';
import Ending from './Section/Ending';
import HeroSection from './Section/HeroSection';
import Pagewidth from '@/Snippet/Pagewidth';
import UpworkReviews from './Section/UpworkReviews';
import { upworkReviews } from '@/Data/upworkReviews';

const Hompage = () => {
    return (
        <>
            <Pagewidth>
                <HeaderSection />
                <About />
                <Skills />
                <UpworkReviews cls="bg-black rounded-xl my-2 sm:my-4 lg:my-6 shadow-lg shadow-indigo-500/20 py-8 px-5 animate-on-scroll animate-fade-up text-white" reviews={upworkReviews} />
                <Ending />
            </Pagewidth>
        </>
    )
}

export default Hompage