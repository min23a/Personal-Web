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
                "GitHub profile and repositories of Md Minhazul Abedin (@min23a).",
            "mainEntity": {
                "@type": "Person",
                "name": "Md Minhazul Abedin",
                "url": "https://abedin.online/git",
                "about": "GitHub profile and repositories of Md Minhazul Abedin (@min23a).",
                "sameAs": "https://github.com/min23a",

            }
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
            "url": "https://abedin.online/hire-shopify-developer",
            "mainEntity": [
                {
                    "@type": "Service",
                    "name": "Shopify Theme Customization (Dawn + OS 2.0)",
                    "description": {
                        "@type": "Details",
                        "text": "Pixel-clean edits to existing themes, section upgrades, and layout improvements without breaking Shopify updates."
                    }
                },
                {
                    "@type": "Service",
                    "name": "Custom Sections (App-free features)",
                    "description": {
                        "@type": "Details",
                        "text": "Reusable OS 2.0 sections like bundles, breadcrumbs, advanced UI blocks, and marketing sections—built for speed."
                    }
                },
                {
                    "@type": "Service",
                    "name": "Performance Optimization (Core Web Vitals)",
                    "description": {
                        "@type": "Details",
                        "text": "Improve LCP/INP/CLS by reducing render-blocking Liquid, optimizing assets, and cleaning frontend execution."
                    }
                },
                {
                    "@type": "Service",
                    "name": "Product & Collection UX Improvements",
                    "description": {
                        "@type": "Details",
                        "text": "Better product discovery, cleaner PDP/collection layouts, and navigation improvements that support conversion."
                    }
                },
                {
                    "@type": "Service",
                    "name": "Shopify Front-end Features (JS / AJAX)",
                    "description": {
                        "@type": "Details",
                        "text": "Dynamic behaviors like filtering, sliders, UI enhancements—implemented responsibly with minimal bloat."
                    }
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "@id": "https://abedin.online/hire-shopify-developer/#contactpoint",
            "contactType": "sales",
            "email": "mailto:minhaz.buft191@gmail.com",
            "availableLanguage": ["en"],
            "areaServed": "Worldwide",
            "mainEntityOfPage": { "@id": "https://abedin.online/hire-shopify-developer/#contact" }
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
    ],
    ShopifyDeveloper: [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://abedin.online/shopify-developer/#webpage",
            "url": "https://abedin.online/shopify-developer",
            "name": "Shopify Developer | Theme, OS 2.0, Speed & CRO",
            "isPartOf": { "@id": "https://abedin.online/#website" },
            "about": { "@id": "https://abedin.online/#person" },
            "inLanguage": "en",
            "description":
                "Shopify developer specializing in Online Store 2.0, Liquid theme customization, performance optimization, and CRO-focused storefront improvements. See projects and hire."
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://abedin.online/shopify-developer/#breadcrumbs",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://abedin.online/" },
                { "@type": "ListItem", "position": 2, "name": "Shopify Developer", "item": "https://abedin.online/shopify-developer" }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": "https://abedin.online/shopify-developer/#article",
            "headline": "Shopify Developer | Theme, OS 2.0, Speed & CRO",
            "description":
                "Shopify developer specializing in Online Store 2.0, Liquid theme customization, performance optimization, and CRO-focused storefront improvements. See projects and hire.",
            "author": { "@id": "https://abedin.online/#person" },
            "publisher": { "@id": "https://abedin.online/#person" },
            "mainEntityOfPage": { "@id": "https://abedin.online/shopify-developer/#webpage" }
        },
        {
            "@context": "https://schema.org",
            "@type": "Skills",
            "@id": "https://abedin.online/shopify-developer/#skils",
            "skill": [
                "Shopify Theme Development",
                "Liquid Templating",
                "Online Store 2.0",
                "Performance Optimization",
                "Core Web Vitals",
                "Conversion Rate Optimization (CRO)",
                "JavaScript & Front-end Enhancements",
                "E-commerce UX Improvements"
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://abedin.online/shopify-developer/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the difference between a Shopify developer and a Shopify expert?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A Shopify developer focuses on theme code, Online Store 2.0 architecture, and front-end implementation (Liquid, JS, HTML/CSS). Many “experts” focus more on strategy or apps. I work mainly on code-level improvements that impact speed, UX, and maintainability."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you work with my existing theme?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Most work is done directly on an existing theme (Dawn or other OS 2.0 themes), with upgrade-safe patterns so you can keep improving without rebuilding everything."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you build custom sections instead of apps?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "When it’s a good fit. If the feature is UI/UX-focused and doesn’t require a complex backend, a custom OS 2.0 section is often faster, cheaper long-term, and better for performance."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I get started?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Go to the hire page and send your store URL, the pages you want improved, and your goals (speed, layout, sections, or conversion). I’ll reply with a plan and the fastest route to results."
                    }
                }
            ]
        }
    ],
    FreelanceShopifyDeveloper: [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://abedin.online/freelance-shopify-developer/#webpage",
            "url": "https://abedin.online/freelance-shopify-developer",
            "name": "Freelance Shopify Developer | Fast Execution for Store Growth",
            "isPartOf": { "@id": "https://abedin.online/#website" },
            "about": { "@id": "https://abedin.online/#person" },
            "inLanguage": "en",
            "description": "Freelance Shopify developer for OS 2.0 theme customization, custom sections, and speed optimization. Flexible collaboration, clear deliverables, and upgrade-safe code."
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://abedin.online/freelance-shopify-developer/#breadcrumbs",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://abedin.online/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Freelance Shopify Developer",
                    "item": "https://abedin.online/freelance-shopify-developer"
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

