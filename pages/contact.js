import Footer from '@/Components/Footer'
import HirePage from '@/Components/HirePage'
import JsonLd from '@/Components/JsonLd'
import Navigation from '@/Components/Navigation'
import Ending from '@/Components/Section/Ending'
import { hireDetails } from '@/Data/Hiredetails'
import { seoMap } from '@/Data/seoMap'
import { schema } from '@/Data/SeoSchema'
import SEO from '@/Snippet/SEO'
import React, { createContext } from 'react'

export const HireDetails = createContext();

const contact = () => {
    return (
        <>
            <SEO path="contact" data={seoMap.contact} />
            <JsonLd data={schema.contact} />
            <HireDetails.Provider value={hireDetails}>
                <main>
                    <section className="sticky top-0 w-full text-white bg-secondary z-50">
                        <Navigation />
                    </section>

                    <section className='w-[80vw] m-auto max-w-[1200px]'>
                        <HirePage />
                    </section>
                </main>
            </HireDetails.Provider>
            <Footer />
        </>
    )
}

export default contact