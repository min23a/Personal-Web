const BASE = "https://abedin.online/blogs";

export const ids = {
    website: `${BASE}/#website`,
    person: `${BASE}/#person`,
};

/**
 * Build SEO-safe schema for blog/article pages
 * Works with your existing blog data structure
 */
export function buildBlogSchema(blog) {
    console.log(blog)
    if (!blog?.slug) return [];

    const url = `${BASE}/${blog.slug}`;

    const schemas = [];

    /* ----------------------------------------
     * WebPage (always required)
     * -------------------------------------- */
    schemas.push({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: blog.seo?.title,
        description: blog.seo?.description,
        isPartOf: { "@id": ids.website },
        about: { "@id": ids.person },
        inLanguage: "en",
    });

    /* ----------------------------------------
     * Breadcrumbs (always required)
     * -------------------------------------- */
    schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${BASE}/`,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: blog.hero?.h1 || blog.seo?.title,
                item: url,
            },
        ],
    });

    /* ----------------------------------------
     * Article (main SEO object)
     * -------------------------------------- */
    schemas.push({
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${url}#article`,
        headline: blog.seo?.title,
        description: blog.seo?.description,
        author: { "@id": ids.person },
        publisher: { "@id": ids.person },
        mainEntityOfPage: { "@id": `${url}#webpage` },
        datePublished: blog.seo?.datePublished,
        dateModified: blog.seo?.dateModified || blog.seo?.datePublished,
        inLanguage: "en",
    });

    /* ----------------------------------------
     * FAQPage (ONLY if FAQ is enabled & visible)
     * -------------------------------------- */
    if (blog.faq?.enabled && blog.faq?.items?.length) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${url}#faq`,
            mainEntity: blog.faq.items.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.a,
                },
            })),
        });
    }

    return cleanUndefined(schemas);
}

/* ----------------------------------------
 * Utility: remove undefined values
 * -------------------------------------- */
function cleanUndefined(obj) {
    return JSON.parse(JSON.stringify(obj));
}
