import React from "react";
import Layout from "@/Components/Layout";
import SEO from "@/Snippet/SEO";
import JsonLd from "@/Components/JsonLd";
import { locationPages } from "@/Data/locationPages";
import { buildLocationServiceSchema } from "@/Data/SeoSchema";

export default function LocationPage({ page }) {
    if (!page) return null;

    const path = `shopify-developer-in/${page.slug}`;

    return (
        <>
            <SEO
                data={{
                    title: page.metaTitle,
                    description: page.metaDescription,
                }}
                path={path}
            />

            {/* If you already have a builder, use it. Otherwise you can paste schema inline. */}
            <JsonLd
                data={buildLocationServiceSchema({
                    country: page.country,
                    title: page.title,
                    description: page.metaDescription,
                })}
            />

            <Layout>
                <main className="max-w-5xl mx-auto px-6 py-10">
                    <h1 className="text-3xl font-semibold">{page.title}</h1>

                    <div className="mt-5 space-y-4">
                        {page.intro.map((p, idx) => (
                            <p key={idx} className="leading-7 opacity-90">
                                {p}
                            </p>
                        ))}
                    </div>

                    <section className="mt-10">
                        <h2 className="text-2xl font-semibold">What I can help with</h2>
                        <ul className="mt-4 list-disc pl-6 space-y-2 opacity-90">
                            {page.services.map((s, idx) => (
                                <li key={idx}>{s}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-semibold">How we work</h2>
                        <ol className="mt-4 list-decimal pl-6 space-y-2 opacity-90">
                            {page.workflow.map((s, idx) => (
                                <li key={idx}>{s}</li>
                            ))}
                        </ol>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-semibold">Why remote Shopify development works</h2>
                        <ul className="mt-4 list-disc pl-6 space-y-2 opacity-90">
                            {page.whyRemoteWorks.map((s, idx) => (
                                <li key={idx}>{s}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="mt-10 p-6 rounded-2xl border">
                        <h2 className="text-2xl font-semibold">{page.ctaTitle}</h2>
                        <p className="mt-2 opacity-90">{page.ctaText}</p>

                        <div className="mt-4">
                            <a
                                href="/hire-shopify-developer"
                                className="inline-flex px-5 py-3 rounded-xl border font-medium"
                            >
                                Hire Shopify Developer
                            </a>
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    return {
        paths: locationPages.map((p) => ({
            params: { country: [p.slug] },
        })),
        fallback: false,
    };
}


export async function getStaticProps({ params }) {
    const slug = Array.isArray(params.country)
        ? params.country[0]
        : params.country;

    const page = locationPages.find((p) => p.slug === slug) || null;

    return {
        props: { page },
        revalidate: 3600,
    };
}
