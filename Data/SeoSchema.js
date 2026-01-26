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
    ]
};
