import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Head from 'next/head'
import React from 'react'

const SEO = ({ path = "", data }) => {
    return (
        <Head>
            <title>{data.title}</title>
            <meta property="og:title" content={data.title} key="title" />
            <meta name="description" key="description" content={data.meta} />
            <meta name="keywords" content={data.tags} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`https://abedin.online/${path}`} />
            <Analytics />
            <SpeedInsights />
        </Head>
    )
}

export default SEO