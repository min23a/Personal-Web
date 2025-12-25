import Head from "next/head";
import Navigation from "@/Components/Navigation";
import Projects from "@/Components/Projects";
import Announcement from "@/Components/Section/Announcement";
import { personalData } from "@/Data/PersonalData";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getUserProfile, getRepos } from "@/services/git";

export default function Project({ profile, repositories }) {
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
                <section className="sticky top-0 w-full text-white font-bold bg-secondary z-50">
                    <Navigation />
                </section>

                <section className="sticky w-full bg-black text-white text-center p-2">
                    <Announcement />
                </section>

                <section className="w-[80vw] m-auto max-w-[1200px]">
                    {/* Pass the data down to your Projects component */}
                    <Projects profile={profile} repositories={repositories} />
                </section>
            </main>
        </>
    );
}

export async function getStaticProps() {
    const username = process.env.GITHUB_USERNAME || "min23a"; // <- fix the env name
    const profile = await getUserProfile(username);
    const repositories = await getRepos(username);

    return {
        props: { profile, repositories },
        revalidate: 3600, // optional ISR
    };
}
