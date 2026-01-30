import React from "react";
import Link from "next/link";

const BlogCard = ({ slug, title, description, meta, hrefPrefix = "" }) => {
    const href = `${hrefPrefix}/${slug}`;

    return (
        <article className="group rounded-2xl border p-6 transition hover:shadow-sm">
            <header>
                <h3 className="text-xl font-semibold leading-snug">
                    <Link
                        href={href}
                        className="underline-offset-4 group-hover:underline"
                    >
                        {title}
                    </Link>
                </h3>

                {meta ? (
                    <div className="mt-2 text-sm flex flex-wrap gap-x-3 gap-y-1">
                        {meta.readingTime ? <span>{meta.readingTime}</span> : null}
                        {meta.datePublished ? <span>{meta.datePublished}</span> : null}
                    </div>
                ) : null}
            </header>

            {description ? (
                <p className="mt-4 leading-relaxed line-clamp-3">
                    {description}
                </p>
            ) : null}

            <footer className="mt-5">
                <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 group-hover:underline"
                >
                    Read article →
                </Link>
            </footer>
        </article>
    );
};

export default React.memo(BlogCard);
