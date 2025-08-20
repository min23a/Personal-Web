import React from 'react'
import HeaderSection from './Section/HeaderSection';
import Skills from './Section/Skills';
import About from './Section/About';
import Ending from './Section/Ending';

const Hompage = () => {
    return (
        <>
            <HeaderSection />
            <About />
            <Skills />
            <Ending />
        </>
    )
}

export default Hompage