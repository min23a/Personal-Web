import JsonLd from '@/Components/JsonLd'
import Layout from '@/Components/Layout'
import Ending from '@/Components/Section/Ending'
import ProjectsSec from '@/Components/Section/ProjectsSec'
import { personalData } from '@/Data/PersonalData'
import { schema } from '@/Data/SeoSchema'
import Breadcrumb from '@/Snippet/Breadcrumb'
import Pagewidth from '@/Snippet/Pagewidth'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Head from 'next/head'
import React from 'react'

const index = () => {
    return (
        <>
            <Head>
                <title>{personalData.name}</title>
                <meta property="og:title" content={personalData.name} key="title" />
                <meta name="description" key="description" content={personalData.meta} />
                <meta name="keywords" content={personalData.tags} />
                <Analytics />
                <SpeedInsights />
            </Head>
            <JsonLd data={schema.home} />
            <Layout>
                <Pagewidth>
                    <Breadcrumb />
                    <ProjectsSec heading='Projects I Have done' />
                    <Ending />
                </Pagewidth>
            </Layout>

        </>
    )
}

export default index