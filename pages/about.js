import Layout from '@/Components/Layout';
import About from '@/Components/Section/AboutMe';
import React, { createContext } from 'react'

export const AboutDetails = createContext();

const about = () => {

    return (
        <>
            <Layout>
                <About></About>
            </Layout>
        </>
    )
}

export default about