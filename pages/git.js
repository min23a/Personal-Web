import Head from "next/head";
import Navigation from "@/Components/Navigation";
import Projects from "@/Components/GitProjects";
import { personalData } from "@/Data/PersonalData";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getUserProfile, getRepos } from "@/services/git";
import JsonLd from "@/Components/JsonLd";
import { schema } from "@/Data/SeoSchema";
import Ending from "@/Components/Section/Ending";

export default function Project({ profile, repositories }) {
    return (
        <>
            <JsonLd data={schema.git}>
                <title>{`${personalData.name} - GIT`}</title>
                <meta property="og:title" content={personalData.name} key="title" />
                <meta name="description" key="description" content={personalData.meta} />
                <meta name="keywords" content={personalData.tags} />
                <Analytics />
                <SpeedInsights />
            </JsonLd>

            <main>
                <section className="sticky top-0 w-full text-white bg-secondary z-50">
                    <Navigation />
                </section>

                <section className="w-[80vw] m-auto max-w-[1200px]">
                    {/* Pass the data down to your Projects component */}
                    <Projects profile={profile} repositories={repositories} />
                    <Ending />
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
