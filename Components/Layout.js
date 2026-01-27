import { personalData } from '@/Data/PersonalData'
import React, { createContext } from 'react'
import Navigation from './Navigation'
import Footer from './Footer';

export const DetailsContext = createContext();

const Layout = ({ children }) => {
    return (
        <>
            <main className='relative bg-black min-h-screen'>
                <div className='w-[80vw] m-auto max-w-[1400px]  h-[75%] sm:h-[75%] bg-secondary rounded-full shadow-indigo-500/50 shadow-xl absolute top-[-65%] left-[50%] -translate-x-[50%] -z-0' ></div>
                <section className="sticky top-0 w-full text-white z-50 bg-gradient-to-r from-slate-950 via-zinc-900 to-gray-950">
                    <Navigation />
                </section>

                <DetailsContext.Provider value={personalData}>
                    <section className="w-full m-auto text-white relative z-10">
                        {children}
                    </section>
                </DetailsContext.Provider>
                <Footer />
            </main>
        </>
    )
}

export default Layout