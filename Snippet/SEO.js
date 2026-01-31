import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Head from 'next/head'
import React from 'react'

const SEO = ({ path = "", data }) => {
    return (
        <Head>
            <title>{data.title}</title>
            <meta property="og:title" content={data.title} key="title" />
            <meta name="description" key="description" content={data.meta || data.detailed_desc || data.description} />
            {
                data.tags ? <meta name="keywords" content={data.tags.join(", ")} /> : data.tools ? <meta name="keywords" content={data.tools.join(", ")} /> : null
            }
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`https://abedin.online/${path}`} />
            <Analytics />
            <SpeedInsights />
        </Head>
    )
}

export default SEO