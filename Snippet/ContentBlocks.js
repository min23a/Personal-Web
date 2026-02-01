import React from "react";
import Link from "next/link";
import Accordion from "./Accordion";
import Image from "next/image";

/** Section container */
export const Section = ({ title, children, id, className = "" }) => (
    <section id={id} className={`mt-12 ${className}`}>
        {title ? <h2 className="text-2xl font-semibold">{title}</h2> : null}
        {children}
    </section>
);

/** Paragraph(s) */
export const Prose = ({ text, className = "" }) => {
    if (!text) return null;
    return (
        <div className={`mt-3 leading-relaxed whitespace-pre-line ${className}`}>
            {text}
        </div>
    );
};

/** Card grid list for {title, desc} items */
export const CardGrid = ({ items = [], className = "" }) => {
    if (!items?.length) return null;

    return (
        <div className={`mt-6 grid gap-4 sm:grid-cols-2 ${className}`}>
            {items.map((x) => (
                <div key={x.title} className="rounded-2xl border p-5">
                    <h3 className="font-semibold">{x.title}</h3>
                    {x.desc ? <p className="mt-2 leading-relaxed">{x.desc}</p> : null}
                </div>
            ))}
        </div>
    );
};

/** Simple CTA block */
export const CTABox = ({ title, desc, button, className = "" }) => {
    if (!title && !desc && !button) return null;

    return (
        <section className={`mt-12 rounded-2xl border p-6 ${className}`}>
            {title ? <h2 className="text-2xl font-semibold">{title}</h2> : null}
            {desc ? <p className="mt-2 leading-relaxed">{desc}</p> : null}

            {button?.href && button?.label ? (
                <div className="mt-5">
                    <Link
                        href={button.href}
                        className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 hover:bg-white hover:text-black hover:shadow-indigo-500/50 hover:shadow-sm transition"
                    >
                        {button.label}
                    </Link>
                </div>
            ) : null}
        </section>
    );
};

/** Internal links list */
export const LinkPills = ({ title, items = [], className = "" }) => {
    if (!items?.length) return null;

    return (
        <section className={`mt-6 ${className}`}>
            {title ? <h2 className="text-2xl font-semibold">{title}</h2> : null}
            <div className="mt-4 flex flex-wrap gap-3">
                {items.map((l) => (
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
    );
};

/** Plain text FAQ (no accordion required) */
export const FAQText = ({ enabled = true, title = "FAQ", items = [] }) => {
    if (!enabled || !items?.length) return null;

    return (
        <section className="mt-12">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="mt-6 space-y-6">
                {items.map((f) => (
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
    );
};

export const ImageBlock = ({ src, alt = "", className = "", priority }) => {
    if (!src) return null;
    return <Image src={src} alt={alt} priority={priority} className={`mt-6 w-full ${className}`} />;
};
