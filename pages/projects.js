import Navigation from "@/Components/Navigation";
import { personalData } from '@/Data/PersonalData';
import Head from "next/head";
import Projects from "@/Components/Projects";
import { Analytics } from "@vercel/analytics/react"
import Announcement from "@/Components/Section/Announcement";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Project() {
    const p = getStaticProps();

    console.log(p);

    if (!p) {
        return <div>Loading...</div>;
    }

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
                <section className="w-[80vw] m-auto max-w-[1200px]">
                    <Projects />
                </section>
            </main>
        </>
    )
}

import { getUserProfile, getRepos } from '@/services/git';

export async function getStaticProps() {
    const username = 'min23a';
    const [profile, repositories] = await Promise.all([
        getUserProfile(username),
        getRepos(username),
    ]);

    return { props: { profile, repositories }, revalidate: 3600 };
}
