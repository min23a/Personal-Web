import HirePage from '@/Components/HirePage'
import Navigation from '@/Components/Navigation'
import Announcement from '@/Components/Section/Announcement'
import { hireDetails } from '@/Data/Hiredetails'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Head from 'next/head'
import React, { createContext } from 'react'

export const HireDetails = createContext();

const contact = () => {
    return (
        <>
            <Head>
                <title>{hireDetails.title}</title>
                <meta property="og:title" content={hireDetails.title} key="title" />
                <meta name="description" key="description" content={hireDetails.meta_desc} />
                <meta name="keywords" content={hireDetails.tag} />
                <Analytics />
                <SpeedInsights />
            </Head>
            <HireDetails.Provider value={hireDetails}>
                <main>
                    <section className="sticky top-0 w-full text-white font-bold bg-secondary z-50">
                        <Navigation />
                    </section>

                    <section className="sticky w-full bg-black text-white text-center p-2 ">
                        <Announcement />
                    </section>

                    <section className='w-[80vw] m-auto max-w-[1200px]'>
                        <HirePage />
                    </section>
                </main>
            </HireDetails.Provider>
        </>
    )
}

export default contact