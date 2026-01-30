import React from "react";
import Link from "next/link";
import SEO from "@/Snippet/SEO";
import Layout from "@/Components/Layout";
import { Heading } from "@/Snippet/Typograph";
import Accordion from "@/Snippet/Accordion";
import { schema } from "@/Data/SeoSchema";
import JsonLd from "@/Components/JsonLd";

const HireShopifyDeveloper = () => {
    const title = "Hire Shopify Developer | Md Minhazul Abedin";
    const description =
        "Hire a Shopify developer for theme customization, Online Store 2.0 sections, performance optimization, and CRO-focused storefront improvements.";
    const tags = [
        "Hire Shopify Developer",
        "Shopify Theme Customization",
        "Shopify Performance Optimization",
        "Shopify UX Improvements",
        "Shopify Online Store 2.0",
        "Shopify Developer for Hire",
    ];


    const services = [
        {
            title: "Shopify Theme Customization (Dawn + OS 2.0)",
            desc:
                "Pixel-clean edits to existing themes, section upgrades, and layout improvements without breaking Shopify updates.",
        },
        {
            title: "Custom Sections (App-free features)",
            desc:
                "Reusable OS 2.0 sections like bundles, breadcrumbs, advanced UI blocks, and marketing sections—built for speed.",
        },
        {
            title: "Performance Optimization (Core Web Vitals)",
            desc:
                "Improve LCP/INP/CLS by reducing render-blocking Liquid, optimizing assets, and cleaning frontend execution.",
        },
        {
            title: "Product & Collection UX Improvements",
            desc:
                "Better product discovery, cleaner PDP/collection layouts, and navigation improvements that support conversion.",
        },
        {
            title: "Shopify Front-end Features (JS / AJAX)",
            desc:
                "Dynamic behaviors like filtering, sliders, UI enhancements—implemented responsibly with minimal bloat.",
        },
    ];

    const process = [
        {
            title: "1) Quick audit",
            desc:
                "You share your store URL + goals. I review theme structure, performance bottlenecks, and UX opportunities.",
        },
        {
            title: "2) Clear plan + estimate",
            desc:
                "I propose the approach (safe theme edits vs custom sections), timeline, and what success looks like.",
        },
        {
            title: "3) Build & iterate",
            desc:
                "Work is delivered in small checkpoints so you can review fast. Clean code + upgrade-safe structure.",
        },
        {
            title: "4) QA + launch",
            desc:
                "Cross-device testing, performance checks, and deployment with rollback safety.",
        },
        {
            title: "5) Handover",
            desc:
                "Short documentation so your team can maintain, extend, and ship future updates confidently.",
        },
    ];

    const faqs = [
        {
            q: "What Shopify work do you handle?",
            a:
                "Theme customization, Online Store 2.0 sections, Liquid/JS enhancements, performance optimization, and CRO-focused UX improvements for product and collection pages.",
        },
        {
            q: "Do you work with Dawn and Shopify 2.0 themes?",
            a:
                "Yes. I build upgrade-safe customizations using OS 2.0 sections/snippets and Shopify-native patterns whenever possible.",
        },
        {
            q: "Can you improve my store speed without ruining design?",
            a:
                "Yes. The approach is to keep the UI intact while reducing render-blocking assets, optimizing images, minimizing heavy scripts, and simplifying Liquid rendering paths.",
        },
        {
            q: "Do you replace apps with custom code?",
            a:
                "When it makes sense. If an app is slowing the store or adding recurring cost, I can often replace it with a lightweight section or snippet—while keeping maintainability in mind.",
        },
        {
            q: "How do we start?",
            a:
                "Send your store URL and what you want to improve. If you already know the scope, include examples, pages, or screenshots—then I’ll propose the fastest route to results.",
        },
    ];

    return (
        <>
            <Layout>
                {/* If you don’t have Seo component, remove this block */}
                <SEO path={"hire-shopify-developer"} data={{ title, description, tags }} />
                <JsonLd data={schema.hirePage} />

                <main className="max-w-5xl text-white mx-auto px-6 py-10">
                    {/* HERO */}
                    <header className="space-y-4">
                        <Heading className="text-4xl font-bold tracking-tight">
                            Hire Shopify Developer
                        </Heading>

                        <p className="text-lg leading-relaxed">
                            I help Shopify stores ship clean theme customizations, OS 2.0 sections,
                            performance improvements, and conversion-focused UI upgrades—without
                            bloated apps or fragile code. If you want a storefront that looks premium
                            and loads fast, this page is the quickest way to start.
                        </p>

                        {/* Primary CTA */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 hover:bg-white hover:text-black hover:shadow-md hover:shadow-indigo-500/50 transition"
                            >
                                Contact me
                            </Link>

                            <Link
                                href="/projects"
                                className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 hover:bg-white hover:text-black hover:shadow-md hover:shadow-indigo-500/50 transition"
                            >
                                See projects
                            </Link>
                        </div>

                        {/* Strong internal links */}
                        <p className="text-sm pt-2">
                            Prefer proof first? Explore{" "}
                            <Link className="underline hover:no-underline" href="/projects">
                                case studies
                            </Link>
                            , read{" "}
                            <Link className="underline hover:no-underline" href="/about">
                                about my background
                            </Link>
                            , or go straight to{" "}
                            <Link className="underline hover:no-underline" href="/contact">
                                contact
                            </Link>
                            .
                        </p>
                    </header>

                    {/* SERVICES */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold">Services</h2>
                        <p className="mt-2 ">
                            Practical, outcome-driven work that improves speed, UX, and maintainability.
                        </p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {services.map((s) => (
                                <div key={s.title} className="rounded-2xl border p-5">
                                    <h3 className="font-semibold">{s.title}</h3>
                                    <p className="mt-2 leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 text-sm">
                            Related:{" "}
                            <Link className="underline hover:no-underline" href="/projects">
                                Shopify case studies
                            </Link>{" "}
                            •{" "}
                            <Link className="underline hover:no-underline" href="/projects/shopify-or-tag-filtering">
                                Tag filtering build
                            </Link>{" "}
                            •{" "}
                            <Link className="underline hover:no-underline" href="/projects/greatness-shopify-cro">
                                CRO + performance project
                            </Link>
                        </div>
                    </section>

                    {/* PROCESS */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold">Process</h2>
                        <p className="mt-2 ">
                            Clear steps, fast feedback loops, and safe delivery.
                        </p>

                        <div className="mt-6 grid gap-4">
                            {process.map((step) => (
                                <div key={step.title} className="rounded-2xl border p-5">
                                    <h3 className="font-semibold">{step.title}</h3>
                                    <p className="mt-2 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ (plain text first) */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold">FAQ</h2>
                        <p className="mt-2 ">
                            Quick answers to common questions before you reach out.
                        </p>

                        <div className="mt-6 space-y-6">
                            {faqs.map((f) => (
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

                    {/* FINAL CTA */}
                    <section className="mt-12 rounded-2xl border p-6">
                        <h2 className="text-2xl font-semibold">
                            Ready to improve your Shopify storefront?
                        </h2>
                        <p className="mt-2 leading-relaxed">
                            Send your store URL and what you want to improve (speed, UI, sections,
                            conversion flow). I’ll reply with a clear plan and the fastest route to results.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 hover:bg-white hover:text-black hover:shadow-indigo-500/50 hover:shadow-sm transition"
                            >
                                Start a project
                            </Link>
                            <Link
                                href="/projects"
                                className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 hover:bg-white hover:text-black hover:shadow-indigo-500/50 hover:shadow-sm transition"
                            >
                                Browse work
                            </Link>
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    );
};

export default HireShopifyDeveloper;
