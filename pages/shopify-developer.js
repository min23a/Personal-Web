import React from "react";
import Link from "next/link";
import { Blogs } from "@/Data/Blogs";
import SEO from "@/Snippet/SEO";
import JsonLd from "@/Components/JsonLd";
import Layout from "@/Components/Layout";
import Accordion from "@/Snippet/Accordion";
import { Heading, SubHeading } from "@/Snippet/Typograph";
import { schema } from "@/Data/SeoSchema";


const ShopifyDeveloper = () => {
    const data = Blogs.find(b => b.slug === "shopify-developer");
    return (
        <>
            <SEO path={data.slug} data={data.seo} />
            <JsonLd data={schema.ShopifyDeveloper} />
            <Layout>
                <main className="max-w-5xl mx-auto px-6 py-10">
                    {/* HERO */}
                    <header className="space-y-4">
                        <Heading cls="tracking-tight">{data.hero.h1}</Heading>

                        <p className="text-lg leading-relaxed">
                            {data.hero.intro}
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <Link
                                href={data.hero.primaryCta.href}
                                className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 hover:bg-white hover:text-black hover:shadow-indigo-500/50 hover:shadow-sm transition"
                            >
                                {data.hero.primaryCta.label}
                            </Link>

                            <Link
                                href={data.hero.secondaryCta.href}
                                className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 hover:bg-white hover:text-black hover:shadow-indigo-500/50 hover:shadow-sm transition"
                            >
                                {data.hero.secondaryCta.label}
                            </Link>
                        </div>
                    </header>

                    {/* SKILLS */}
                    <section className="mt-12">
                        <SubHeading cls="">{data.skills.title}</SubHeading>
                        <p className="mt-2">{data.skills.intro}</p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {data.skills.items.map((x) => (
                                <div key={x.title} className="rounded-2xl border p-5">
                                    <h3 className="font-semibold">{x.title}</h3>
                                    <p className="mt-2 leading-relaxed">{x.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* TOOLS */}
                    <section className="mt-12">
                        <SubHeading>{data.tools.title}</SubHeading>
                        <p className="mt-2">{data.tools.intro}</p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {data.tools.items.map((x) => (
                                <div key={x.title} className="rounded-2xl border p-5">
                                    <h3 className="font-semibold">{x.title}</h3>
                                    <p className="mt-2 leading-relaxed">{x.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* DIFFERENCE */}
                    <section className="mt-12">
                        <SubHeading>{data.difference.title}</SubHeading>
                        <p className="mt-2">{data.difference.intro}</p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {data.difference.points.map((x) => (
                                <div key={x.title} className="rounded-2xl border p-5">
                                    <h3 className="font-semibold">{x.title}</h3>
                                    <p className="mt-2 leading-relaxed">{x.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mt-12 rounded-2xl border p-6">
                        <SubHeading>{data.cta.title}</SubHeading>
                        <p className="mt-2 leading-relaxed">{data.cta.desc}</p>

                        <div className="mt-5 flex flex-wrap gap-3">
                            <Link
                                href={data.cta.button.href}
                                className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 hover:bg-white hover:text-black hover:shadow-indigo-500/50 hover:shadow-sm transition"
                            >
                                {data.cta.button.label}
                            </Link>

                            {data.cta.links.map((l) => (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 hover:bg-white hover:text-black hover:shadow-indigo-500/50 hover:shadow-sm transition"
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* FAQ (plain text first) */}
                    <section className="mt-12">
                        <SubHeading>{data.faq.title}</SubHeading>
                        <div className="mt-6 space-y-6">
                            {data.faq.items.map((f) => (
                                <Accordion key={f.q} className="rounded-2xl border p-5 hover:shadow-md hover:shadow-indigo-500/50">
                                    <Accordion.Header>
                                        <h3 className="font-semibold">{f.q}</h3>
                                    </Accordion.Header>

                                    <Accordion.Body>
                                        <p className="mt-2 leading-relaxed">{f.a}</p>
                                    </Accordion.Body>
                                </Accordion>
                            ))}
                        </div>
                    </section>

                    {/* Internal links */}
                    <section className="mt-12">
                        <SubHeading>{data.internalLinks.title}</SubHeading>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {data.internalLinks.items.map((l) => (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 hover:bg-white hover:text-black hover:shadow-indigo-500/50 hover:shadow-sm transition"
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

export default ShopifyDeveloper;
