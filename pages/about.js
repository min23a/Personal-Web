import JsonLd from '@/Components/JsonLd';
import Layout from '@/Components/Layout';
import About from '@/Components/Section/AboutMe';
import Ending from '@/Components/Section/Ending';
import { personalData } from '@/Data/PersonalData';
import { seoMap } from '@/Data/seoMap';
import { schema } from '@/Data/SeoSchema';
import Breadcrumb from '@/Snippet/Breadcrumb';
import Pagewidth from '@/Snippet/Pagewidth';
import SEO from '@/Snippet/SEO';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';
import React, { createContext } from 'react'

export const AboutDetails = createContext();

const about = () => {

    return (
        <>
            <SEO path="about" data={seoMap.about} />
            <JsonLd data={schema.about} />
            <Layout>
                <Pagewidth>
                    <Breadcrumb />
                    <About></About>
                </Pagewidth>
            </Layout>
        </>
    )
}

export default about