import React from "react";
import BlogCard from "./BlogCard";

const BlogGrid = ({ items = [], hrefPrefix = "", title, headingcls }) => {
    if (!items?.length) return null;

    return (
        <section className="mt-12">
            {title ? <h2 className={`text-2xl font-semibold ${headingcls}`}>{title}</h2> : null}

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((post) => (
                    <BlogCard
                        key={post.slug}
                        slug={post.slug}
                        title={post.seo?.title || post.hero?.h1}
                        description={post.seo?.description}
                        meta={{
                            readingTime: post.seo?.readingTime,
                            datePublished: post.seo?.datePublished,
                        }}
                        hrefPrefix={hrefPrefix}
                    />
                ))}
            </div>
        </section>
    );
};

export default React.memo(BlogGrid);
