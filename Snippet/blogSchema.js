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
    if (!blog?.slug) return [];

    const url = `${BASE}/${blog.slug}`;

    // Prefer explicit SEO image, then hero image, then generic image.
    const imageUrl =
        blog?.seo?.img ||
        blog?.hero?.img ||
        blog?.img ||
        null;

    // ImageObject (only if valid URL)
    const imageObject = imageUrl
        ? {
            "@type": "ImageObject",
            "@id": `${url}#primaryimage`,
            url: absolutize(imageUrl),
            contentUrl: absolutize(imageUrl),
        }
        : undefined;

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

    /* ---------------------------
   * ImageObject (referenced by WebPage + Article)
   * ------------------------- */
    if (imageObject) {
        schemas.push({
            "@context": "https://schema.org",
            ...imageObject,
        });
    }

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


/**
 * If you ever pass a relative URL like "/og/blog.jpg",
 * this ensures it becomes absolute for schema.
 */
function absolutize(input) {
    if (!input) return undefined;

    // Next.js imported image object: { src, width, height, ... }
    const src = typeof input === "string" ? input : input?.src;

    if (!src || typeof src !== "string") return undefined;

    if (src.startsWith("http://") || src.startsWith("https://")) return src;
    if (src.startsWith("/")) return `${BASE}${src}`;
    return `${BASE}/${src}`;
}
