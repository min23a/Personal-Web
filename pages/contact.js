import HirePage from '@/Components/HirePage'
import JsonLd from '@/Components/JsonLd'
import Navigation from '@/Components/Navigation'
import Announcement from '@/Components/Section/Announcement'
import Ending from '@/Components/Section/Ending'
import { hireDetails } from '@/Data/Hiredetails'
import { schema } from '@/Data/SeoSchema'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import React, { createContext } from 'react'

export const HireDetails = createContext();

const contact = () => {
    return (
        <>
            <JsonLd data={schema.contact}>
                <title>{`${hireDetails.title} - Contact`}</title>
                <meta property="og:title" content={hireDetails.title} key="title" />
                <meta name="description" key="description" content={hireDetails.meta_desc} />
                <meta name="keywords" content={hireDetails.tag} />
                <Analytics />
                <SpeedInsights />
            </JsonLd>
            <HireDetails.Provider value={hireDetails}>
                <main>
                    <section className="sticky top-0 w-full text-white bg-secondary z-50">
                        <Navigation />
                    </section>

                    <section className='w-[80vw] m-auto max-w-[1200px]'>
                        <HirePage />
                        <Ending />
                    </section>
                </main>
            </HireDetails.Provider>
        </>
    )
}

export default contact