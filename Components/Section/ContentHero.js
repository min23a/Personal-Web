import React from "react";
import Link from "next/link";
import { ImageBlock } from "@/Snippet/ContentBlocks";

const ContentHero = ({ h1, img, imgAlt, intro, primaryCta, secondaryCta, meta }) => {
    return (
        <header className="space-y-4">
            {h1 ? <h1 className="text-4xl font-bold tracking-tight">{h1}</h1> : null}

            {meta?.readingTime || meta?.datePublished ? (
                <div className="text-sm flex flex-wrap gap-x-3 gap-y-1">
                    {meta?.readingTime ? <span>{meta.readingTime}</span> : null}
                    {meta?.datePublished ? <span>Published: {meta.datePublished}</span> : null}
                    {meta?.dateModified ? <span>Updated: {meta.dateModified}</span> : null}
                </div>
            ) : null}

            <div className="mt-6">
                <ImageBlock src={img} alt={imgAlt || "Hero Image"} className="w-full" priority={true} />
            </div>

            {intro ? <p className="text-lg leading-relaxed">{intro}</p> : null}

            {(primaryCta?.href && primaryCta?.label) || (secondaryCta?.href && secondaryCta?.label) ? (
                <div className="flex flex-wrap gap-3 pt-2">
                    {primaryCta?.href && primaryCta?.label ? (
                        <Link
                            href={primaryCta.href}
                            className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 hover:bg-white hover:text-black hover:shadow-indigo-500/50 hover:shadow-sm transition"
                        >
                            {primaryCta.label}
                        </Link>
                    ) : null}

                    {secondaryCta?.href && secondaryCta?.label ? (
                        <Link
                            href={secondaryCta.href}
                            className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 hover:bg-white hover:text-black hover:shadow-indigo-500/50 hover:shadow-sm transition"
                        >
                            {secondaryCta.label}
                        </Link>
                    ) : null}
                </div>
            ) : null}
        </header>
    );
};

export default React.memo(ContentHero);
