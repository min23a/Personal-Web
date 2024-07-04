import React, { createContext } from 'react'
import { personalData } from '@/Data/PersonalData';
import HeaderSection from './Section/HeaderSection';
import Skills from './Section/Skills';
import About from './Section/About';
import Ending from './Section/Ending';

export const DetailsContext = createContext();

const Hompage = () => {
    return (
        <>
            <DetailsContext.Provider value={personalData}>
                <HeaderSection />
                <About />
                <Skills />
                <Ending />
            </DetailsContext.Provider>
        </>
    )
}

export default Hompage