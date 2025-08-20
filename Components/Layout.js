import { personalData } from '@/Data/PersonalData'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Head from 'next/head'
import React, { createContext } from 'react'
import Navigation from './Navigation'
import Announcement from './Section/Announcement'
import { Analytics } from '@vercel/analytics/react'

export const DetailsContext = createContext();

const Layout = ({ children }) => {
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
            <main>
                <section className="sticky top-0 w-full bg-secondary z-50">
                    <Navigation />
                </section>
                <section className="sticky w-full bg-black text-white text-center p-2 ">
                    <Announcement />
                </section>
                <DetailsContext.Provider value={personalData}>
                    <section className="w-[80vw] m-auto max-w-[1200px]">
                        {children}
                    </section>
                </DetailsContext.Provider>
            </main>
        </>
    )
}

export default Layout