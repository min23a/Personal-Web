import JsonLd from '@/Components/JsonLd';
import Layout from '@/Components/Layout';
import About from '@/Components/Section/AboutMe';
import Ending from '@/Components/Section/Ending';
import { personalData } from '@/Data/PersonalData';
import { schema } from '@/Data/SeoSchema';
import Pagewidth from '@/Snippet/Pagewidth';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import React, { createContext } from 'react'

export const AboutDetails = createContext();

const about = () => {

    return (
        <>
            <JsonLd data={schema.about}>
                <title>{`${personalData.name} - About`}</title>
                <meta property="og:title" content={personalData.name} key="title" />
                <meta name="description" key="description" content={personalData.meta} />
                <meta name="keywords" content={personalData.tags} />
                <Analytics />
                <SpeedInsights />
            </JsonLd>
            <Layout>
                <Pagewidth>
                    <About></About>
                    <Ending />
                </Pagewidth>
            </Layout>
        </>
    )
}

export default about