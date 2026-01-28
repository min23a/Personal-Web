import React from "react";
import Link from "next/link";
import Layout from "@/Components/Layout";
import SEO from "@/Snippet/SEO";
import JsonLd from "@/Components/JsonLd";
import { buildBlogArticleSchema } from "@/Data/SeoSchema";


const [...slug] = (data) => {
    const schemaData = buildBlogArticleSchema(
        {
            slug: data.slug,
            title: data.seo.title,
            description: data.seo.description,
            image: data.hero.image || "",
            datePublished: data.seo.datePublished,
            dateModified: data.seo.dateModified,
        }
    )

    return (
        <>
            <SEO path={data.slug} data={data.seo} />
            <JsonLd data={schemaData} />
            <Layout>


                <main className="max-w-5xl mx-auto px-6 py-10">
                    {/* HERO */}
                    <header className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight">{data.hero.h1}</h1>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            {data.hero.intro}
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <Link
                                href={data.hero.primaryCta.href}
                                className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 hover:bg-white hover:shadow-sm transition"
                            >
                                {data.hero.primaryCta.label}
                            </Link>

                            <Link
                                href={data.hero.secondaryCta.href}
                                className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 hover:bg-white hover:shadow-sm transition"
                            >
                                {data.hero.secondaryCta.label}
                            </Link>
                        </div>
                    </header>

                    {/* SKILLS */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold">{data.skills.title}</h2>
                        <p className="mt-2 text-gray-700">{data.skills.intro}</p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {data.skills.items.map((x) => (
                                <div key={x.title} className="rounded-2xl border p-5">
                                    <h3 className="font-semibold">{x.title}</h3>
                                    <p className="mt-2 text-gray-700 leading-relaxed">{x.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* TOOLS */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold">{data.tools.title}</h2>
                        <p className="mt-2 text-gray-700">{data.tools.intro}</p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {data.tools.items.map((x) => (
                                <div key={x.title} className="rounded-2xl border p-5">
                                    <h3 className="font-semibold">{x.title}</h3>
                                    <p className="mt-2 text-gray-700 leading-relaxed">{x.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* DIFFERENCE */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold">{data.difference.title}</h2>
                        <p className="mt-2 text-gray-700">{data.difference.intro}</p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {data.difference.points.map((x) => (
                                <div key={x.title} className="rounded-2xl border p-5">
                                    <h3 className="font-semibold">{x.title}</h3>
                                    <p className="mt-2 text-gray-700 leading-relaxed">{x.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mt-12 rounded-2xl border p-6">
                        <h2 className="text-2xl font-semibold">{data.cta.title}</h2>
                        <p className="mt-2 text-gray-700 leading-relaxed">{data.cta.desc}</p>

                        <div className="mt-5 flex flex-wrap gap-3">
                            <Link
                                href={data.cta.button.href}
                                className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 hover:bg-white hover:shadow-sm transition"
                            >
                                {data.cta.button.label}
                            </Link>

                            {data.cta.links.map((l) => (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 hover:bg-white hover:shadow-sm transition"
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* FAQ (plain text first) */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold">{data.faq.title}</h2>
                        <div className="mt-6 space-y-6">
                            {data.faq.items.map((f) => (
                                <div key={f.q} className="rounded-2xl border p-5">
                                    <h3 className="font-semibold">{f.q}</h3>
                                    <p className="mt-2 text-gray-700 leading-relaxed">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Internal links */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold">{data.internalLinks.title}</h2>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {data.internalLinks.items.map((l) => (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 hover:bg-white hover:shadow-sm transition"
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    );
};

export default [...slug];
