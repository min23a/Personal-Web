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
import SEO from "@/Snippet/SEO";
import { seoMap } from "@/Data/seoMap";
import Footer from "@/Components/Footer";
import Breadcrumb from "@/Snippet/Breadcrumb";

export default function Project({ profile, repositories }) {
    return (
        <>
            <SEO path="git" data={seoMap.git} />
            <JsonLd data={schema.git} />

            <main>
                <section className="sticky top-0 w-full text-white bg-secondary z-50">
                    <Navigation />
                </section>

                <section className="w-[80vw] m-auto max-w-[1200px]">
                    <Breadcrumb />
                    {/* Pass the data down to your Projects component */}
                    <Projects profile={profile} repositories={repositories} />
                </section>
                <Footer />
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
