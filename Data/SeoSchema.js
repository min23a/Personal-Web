export const schema = {
    home: [
        // Person entity (define once per page schema)
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://abedin.online/#person",
            "name": "Md Minhazul Abedin",
            "url": "https://abedin.online",
            "image": "https://abedin.online/favicon.ico",
            "jobTitle": [
                "Shopify Theme Developer",
                "Front-end Developer",
                "MERN Stack Developer",
                "Merchandiser"
            ],
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Budapest",
                "addressCountry": "HU"
            },
            "email": "mailto:minhaz.buft191@gmail.com",
            "sameAs": [
                "https://www.linkedin.com/in/minhaz32",
                "https://github.com/min23a",
                "https://www.upwork.com/freelancers/~01f84864161583b9aa"
            ],
            "knowsAbout": [
                "Shopify",
                "Shopify Liquid",
                "JavaScript",
                "Next.js",
                "React",
                "Theme Performance Optimization",
                "Core Web Vitals",
                "E-commerce",
                "Apparel Merchandising"
            ]
        },

        // Website entity (no SearchAction because /search doesn't exist)
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://abedin.online/#website",
            "url": "https://abedin.online",
            "name": "Md Minhazul Abedin",
            "publisher": { "@id": "https://abedin.online/#person" }
        },

        // Home page entity
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://abedin.online/#webpage",
            "url": "https://abedin.online/",
            "name": "Home — Md Minhazul Abedin",
            "isPartOf": { "@id": "https://abedin.online/#website" },
            "about": { "@id": "https://abedin.online/#person" },
            "inLanguage": "en",
            "description":
                "Portfolio of Md Minhazul Abedin — Shopify theme developer and front-end engineer based in Budapest, Hungary."
        }
    ],

    about: [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://abedin.online/about/#webpage",
            "url": "https://abedin.online/about",
            "name": "About — Md Minhazul Abedin",
            "isPartOf": { "@id": "https://abedin.online/#website" },
            "about": { "@id": "https://abedin.online/#person" },
            "inLanguage": "en",
            "description":
                "Background and experience of Md Minhazul Abedin — Shopify front-end development + merchandising +."
        },

        // Breadcrumbs help Google show breadcrumb rich results
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://abedin.online/about/#breadcrumbs",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://abedin.online/" },
                { "@type": "ListItem", "position": 2, "name": "About", "item": "https://abedin.online/about" }
            ]
        }
    ],

    git: [
        {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "@id": "https://abedin.online/git/#webpage",
            "url": "https://abedin.online/git",
            "name": "GitHub — Md Minhazul Abedin",
            "isPartOf": { "@id": "https://abedin.online/#website" },
            "about": { "@id": "https://abedin.online/#person" },
            "inLanguage": "en",
            "description":
                "GitHub profile and repositories of Md Minhazul Abedin (@min23a)."
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://abedin.online/git/#breadcrumbs",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://abedin.online/" },
                { "@type": "ListItem", "position": 2, "name": "Git", "item": "https://abedin.online/git" }
            ]
        }
    ],

    contact: [
        {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://abedin.online/contact/#webpage",
            "url": "https://abedin.online/contact",
            "name": "Contact — Md Minhazul Abedin",
            "isPartOf": { "@id": "https://abedin.online/#website" },
            "about": { "@id": "https://abedin.online/#person" },
            "inLanguage": "en",
            "description":
                "Contact Md Minhazul Abedin for Shopify theme development and front-end work."
        },

        // ContactPoint helps machines understand your contact method
        {
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "@id": "https://abedin.online/contact/#contactpoint",
            "contactType": "sales",
            "email": "mailto:minhaz.buft191@gmail.com",
            "availableLanguage": ["en"]
        },

        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://abedin.online/contact/#breadcrumbs",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://abedin.online/" },
                { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://abedin.online/contact" }
            ]
        }
    ],
    projects: [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://abedin.online/projects/#webpage",
            "url": "https://abedin.online/projects",
            "name": "Projects — Md Minhazul Abedin",
            "isPartOf": { "@id": "https://abedin.online/#website" },
            "about": { "@id": "https://abedin.online/#person" },
            "inLanguage": "en",
            "description":
                "Portfolio of Shopify development projects and case studies by Md Minhazul Abedin."
        },

        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://abedin.online/projects/#breadcrumbs",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://abedin.online/" },
                { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://abedin.online/projects" }
            ]
        }
    ],
    hirePage: [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://abedin.online/hire-shopify-developer/#webpage",
            "url": "https://abedin.online/hire-shopify-developer",
            "name": "Hire Shopify Developer | Md Minhazul Abedin",
            "isPartOf": { "@id": "https://abedin.online/#website" },
            "about": { "@id": "https://abedin.online/#person" },
            "inLanguage": "en",
            "description":
                "Hire Md Minhazul Abedin, a skilled Shopify developer specializing in custom theme development, performance optimization, and e-commerce solutions."
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://abedin.online/hire-shopify-developer/#breadcrumbs",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://abedin.online/" },
                { "@type": "ListItem", "position": 2, "name": "Hire Shopify Developer", "item": "https://abedin.online/hire-shopify-developer" }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://abedin.online/hire-shopify-developer/#service",
            "name": "Hire Shopify Developer | Md Minhazul Abedin",
            "description":
                "Hire Md Minhazul Abedin, a skilled Shopify developer specializing in custom theme development, performance optimization, and e-commerce solutions.",
            "provider": { "@id": "https://abedin.online/#person" },
            "areaServed": "Worldwide",
            "url": "https://abedin.online/hire-shopify-developer"
        },
        {
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "@id": "https://abedin.online/hire-shopify-developer/#contactpoint",
            "contactType": "sales",
            "email": "mailto:minhaz.buft191@gmail.com",
            "availableLanguage": ["en"]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://abedin.online/hire-shopify-developer/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What Shopify work do you handle?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Theme customization, Online Store 2.0 sections, Liquid/JS enhancements, performance optimization, and CRO-focused UX improvements for product and collection pages."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you work with Dawn and Shopify 2.0 themes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. I build upgrade-safe customizations using OS 2.0 sections/snippets and Shopify-native patterns whenever possible."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you improve my store speed without ruining design?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. The approach is to keep the UI intact while reducing render-blocking assets, optimizing images, minimizing heavy scripts, and simplifying Liquid rendering paths."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you replace apps with custom code?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "When it makes sense. If an app is slowing the store or adding recurring cost, I can often replace it with a lightweight section or snippet—while keeping maintainability in mind."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do we start?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Send your store URL and what you want to improve. If you already know the scope, include examples, pages, or screenshots—then I’ll propose the fastest route to results."
                    }
                }
            ]
        }
    ]

};

const BASE = "https://abedin.online";

export const ids = {
    person: `${BASE}/#person`,
    website: `${BASE}/#website`,
};

export function buildBreadcrumbs({ url, items }) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: items.map((it, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: it.name,
            item: it.item,
        })),
    };
}

export function buildWebPage({ url, name, description }) {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        isPartOf: { "@id": ids.website },
        about: { "@id": ids.person },
        inLanguage: "en",
    };
}

export function buildProjectSchema({ slug, title, description, image, datePublished, dateModified }) {
    const url = `${BASE}/projects/${slug}`;

    // Project as CreativeWork (best for portfolio projects)
    const project = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": `${url}#project`,
        url,
        name: title,
        description,
        image: image ? [image] : undefined,
        author: { "@id": ids.person },
        publisher: { "@id": ids.person },
        datePublished: datePublished || undefined,
        dateModified: dateModified || undefined,
    };

    const webpage = buildWebPage({
        url,
        name: `${title} — Project | Md Minhazul Abedin`,
        description,
    });

    const breadcrumbs = buildBreadcrumbs({
        url,
        items: [
            { name: "Home", item: `${BASE}/` },
            { name: "Projects", item: `${BASE}/projects` },
            { name: title, item: url },
        ],
    });

    // Return array like your existing schema object
    return [webpage, project, breadcrumbs].map(cleanUndefined);
}

export function buildBlogArticleSchema({ slug, title, description, image, datePublished, dateModified }) {
    const url = `${BASE}/blog/${slug}`;

    const article = {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${url}#article`,
        headline: title,
        description,
        image: image ? [image] : undefined,
        author: { "@id": ids.person },
        publisher: { "@id": ids.person },
        mainEntityOfPage: { "@id": `${url}#webpage` },
        datePublished,
        dateModified: dateModified || datePublished,
    };

    const webpage = buildWebPage({
        url,
        name: `${title} — Blog | Md Minhazul Abedin`,
        description,
    });

    const breadcrumbs = buildBreadcrumbs({
        url,
        items: [
            { name: "Home", item: `${BASE}/` },
            { name: "Blog", item: `${BASE}/blog` },
            { name: title, item: url },
        ],
    });

    return [webpage, article, breadcrumbs].map(cleanUndefined);
}

export function buildLocationServiceSchema({ country, title, description }) {
    const slug = country.toLowerCase().replace(/\s+/g, "-");
    const url = `${BASE}/shopify-developer-in-${slug}`;

    const webpage = buildWebPage({
        url,
        name: `${title} | Abedin`,
        description,
    });

    const service = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${url}#service`,
        name: title,
        description,
        provider: { "@id": ids.person },
        areaServed: country,
        url,
    };

    const breadcrumbs = buildBreadcrumbs({
        url,
        items: [
            { name: "Home", item: `${BASE}/` },
            { name: "Hire", item: `${BASE}/hire-shopify-developer` },
            { name: country, item: url },
        ],
    });

    return [webpage, service, breadcrumbs].map(cleanUndefined);
}

function cleanUndefined(obj) {
    // remove undefined keys (keeps schema clean)
    return JSON.parse(JSON.stringify(obj));
}

