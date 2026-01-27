import FlexWarp from "@/Snippet/FlexWarp";
import { Heading, ReadMore } from "@/Snippet/Typograph";
import React, { useMemo, useState } from "react";

function Stars({ rating = 5 }) {
    return (
        <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
                    ★
                </span>
            ))}
        </div>
    );
}

const UpworkReviews = ({
    reviews = [],
    profileUrl,
    initialCount = 6,
    showAllButton = true,
    cls = ""
}) => {
    const [showAll, setShowAll] = useState(false);

    const visible = useMemo(() => {
        if (showAll) return reviews;
        return reviews.slice(0, initialCount);
    }, [reviews, showAll, initialCount]);

    if (!reviews.length) return null;

    return (
        <section className={"w-full " + cls}>
            <div className="flex items-end justify-between gap-4 mb-4 w-full">
                <div className="text-center w-full">
                    <Heading cls="text-center">Highlights from Previous Clients</Heading>
                </div>

                {profileUrl ? (
                    <a
                        href={profileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm underline underline-offset-4"
                    >
                        View on Upwork
                    </a>
                ) : null}
            </div>

            <FlexWarp className="gap-6">
                {visible.map((r) => (
                    <article key={r.id} className="rounded-2xl w-full sm:w-[30%] border border-indigo-500/10 p-4 hover:scale-105 transition-scale duration-300">
                        <div className="">
                            <div className="min-w-0">
                                <p className="font-medium truncate">{r.title}</p>
                                <p className="text-sm  ">{r.client}</p>
                            </div>
                            <Stars rating={r.rating} />
                        </div>

                        <ReadMore lines={2} className="mt-3 text-sm  leading-relaxed">
                            {r.text}
                        </ReadMore>

                        {r.date ? (
                            <p className="mt-3 text-xs ">
                                {r.date}
                            </p>
                        ) : null}
                    </article>
                ))}
            </FlexWarp>

            {showAllButton && reviews.length > initialCount && (
                <div className="mt-6 flex justify-center">
                    <button
                        type="button"
                        onClick={() => setShowAll((v) => !v)}
                        className="rounded-full border px-5 py-2 text-sm hover:bg-gray-50"
                    >
                        {showAll ? "Show less" : "Show all reviews"}
                    </button>
                </div>
            )}
        </section>
    );
}

export default UpworkReviews;