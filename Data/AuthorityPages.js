export const authorityPages = [
    {
        slug: "shopify-developer",
        type: "page-article",
        seo: {
            title: "Shopify Developer | OS 2.0, Liquid, Speed Optimization & CRO",
            description:
                "Learn what a Shopify developer does and why it matters for store performance, UX, and conversions. See how I build OS 2.0 sections, optimize speed, and ship upgrade-safe theme work.",
            canonical: "https://abedin.online/shopify-developer",
            tags: [
                "Shopify Developer",
                "Shopify Liquid",
                "Online Store 2.0",
                "Shopify Theme Customization",
                "Core Web Vitals",
                "Shopify CRO",
            ],
            datePublished: "2025-12-15",
            dateModified: "2026-01-28",
            readingTime: "6 min read",
        },

        hero: {
            h1: "Shopify Developer",
            intro:
                "A Shopify developer builds and improves Shopify storefronts by customizing themes, creating Online Store 2.0 sections, and optimizing speed and user experience. The goal isn’t just “design changes”—it’s building a store that loads fast, feels premium, and stays maintainable as your catalog, traffic, and marketing needs grow.",
            primaryCta: { label: "Hire Shopify Developer", href: "/hire-shopify-developer" },
            secondaryCta: { label: "View Projects", href: "/projects" },
        },

        sections: [
            {
                id: "what-is",
                title: "What does a Shopify developer do?",
                body:
                    "A Shopify developer works on the part of your store customers actually experience: the theme, layout, templates, and interactions. This includes Liquid templates, OS 2.0 sections, and frontend code that controls navigation, product pages, collections, and content.\n\nA strong developer doesn’t just “make it look good.” They make your store easy to use, fast to load, and stable for future updates. That means reducing unnecessary scripts, improving Core Web Vitals, building reusable components, and keeping edits upgrade-safe so your theme can evolve without breaking every few months.",
            },
            {
                id: "skills",
                title: "Skills & responsibilities (what I typically handle)",
                list: [
                    {
                        title: "Theme customization and layout improvements",
                        desc:
                            "Implement pixel-accurate UI changes across homepage, collection, product, and content templates while keeping the theme upgrade-safe.",
                    },
                    {
                        title: "Online Store 2.0 sections and reusable components",
                        desc:
                            "Build configurable sections and snippets that reduce app dependency, improve page speed, and allow non-technical updates from the Shopify editor.",
                    },
                    {
                        title: "Performance optimization (Core Web Vitals)",
                        desc:
                            "Improve LCP, INP, and CLS by optimizing assets, cleaning Liquid render paths, reducing heavy scripts, and stabilizing layout behavior.",
                    },
                    {
                        title: "Conversion-focused UX on product & collection pages",
                        desc:
                            "Refine PDP and collection UX for clarity, better product discovery, stronger information hierarchy, and fewer friction points.",
                    },
                    {
                        title: "Safe deployment and maintainable handover",
                        desc:
                            "Ship changes with QA, cross-device checks, and clear structure so the store can keep evolving without fragile code.",
                    },
                ],
            },
            {
                id: "tools",
                title: "Tools & technologies used in Shopify development",
                body:
                    "Modern Shopify development is a mix of Shopify-native architecture and careful frontend decisions. The goal is to ship features that look premium without adding performance debt.\n\nThese are the core tools I use to build scalable storefronts:",
                list: [
                    { title: "Shopify Liquid", desc: "Theme templates, sections, snippets, and upgrade-safe rendering patterns." },
                    { title: "Online Store 2.0", desc: "Modular section architecture and dynamic templates for scalable storefronts." },
                    { title: "JavaScript (ES6)", desc: "UI behaviors, AJAX rendering, and interaction features with minimal bloat." },
                    { title: "HTML + CSS", desc: "Clean structure, responsive layout, and consistent UI systems." },
                    { title: "Performance mindset", desc: "Core Web Vitals discipline: reduce render blocking and main-thread work." },
                    { title: "Git workflow", desc: "Clean iteration, safe rollbacks, and structured delivery for production sites." },
                ],
            },
            {
                id: "difference",
                title: "What makes my approach different",
                body:
                    "Many stores become slow because new features are added without a system. My approach is designed to scale: upgrade-safe theme work, performance-first decisions, and reusable OS 2.0 components.\n\nThat means you get improvements today without paying a “maintenance tax” later.",
                list: [
                    {
                        title: "Upgrade-safe theme work",
                        desc:
                            "I avoid fragile hacks and keep changes aligned with OS 2.0 patterns so future Shopify updates don’t become a nightmare.",
                    },
                    {
                        title: "Performance and CRO together",
                        desc:
                            "Speed matters, but so does clarity. I optimize for both: fast rendering and a clean user journey toward purchase.",
                    },
                    {
                        title: "App-free where it’s smarter",
                        desc:
                            "If an app slows the store or adds recurring costs, I can often replace it with a lightweight section or snippet.",
                    },
                    {
                        title: "Reusable components, not one-off edits",
                        desc:
                            "I build systems: sections and patterns you can reuse across pages and future campaigns without rebuilding everything.",
                    },
                ],
            },
        ],

        cta: {
            title: "Need a Shopify developer for your store?",
            desc:
                "If your store needs OS 2.0 sections, performance improvements, or conversion-focused UI upgrades, the hire page explains my services and process clearly.",
            button: { label: "Hire Page", href: "/hire-shopify-developer" },
        },

        faq: {
            enabled: true,
            title: "FAQ",
            items: [
                {
                    q: "What is the difference between a Shopify developer and a Shopify expert?",
                    a:
                        "A Shopify developer focuses on theme code, OS 2.0 architecture, and front-end implementation (Liquid, JS, HTML/CSS). Many “experts” focus more on strategy or apps. I work mainly on code-level improvements that impact speed, UX, and maintainability.",
                },
                {
                    q: "Can you work with my existing theme?",
                    a:
                        "Yes. Most work is done directly on an existing theme (Dawn or other OS 2.0 themes), with upgrade-safe patterns so you can keep improving without rebuilding everything.",
                },
                {
                    q: "Do you build custom sections instead of apps?",
                    a:
                        "When it’s a good fit. If the feature is UI/UX-focused and doesn’t require a complex backend, a custom OS 2.0 section is often faster, cheaper long-term, and better for performance.",
                },
                {
                    q: "How do I get started?",
                    a:
                        "Go to the hire page and send your store URL, the pages you want improved, and your goals (speed, layout, sections, or conversion).",
                },
            ],
        },

        internalLinks: {
            title: "Explore more",
            items: [
                { label: "Hire Shopify Developer", href: "/hire-shopify-developer" },
                { label: "Freelance Shopify Developer", href: "/freelance-shopify-developer" },
                { label: "Projects", href: "/projects" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
            ],
        },
    },

    {
        slug: "hire-shopify-developer",
        type: "page-article",
        seo: {
            title: "Hire Shopify Developer | Fast, Upgrade-Safe Theme Work (OS 2.0)",
            description:
                "Hire a Shopify developer for OS 2.0 theme customization, custom sections, speed optimization, and CRO-focused storefront improvements. Clear process, clean code, and reliable delivery.",
            canonical: "https://abedin.online/hire-shopify-developer",
            tags: [
                "Hire Shopify Developer",
                "Shopify Theme Customization",
                "Online Store 2.0 Sections",
                "Shopify Performance Optimization",
                "Shopify CRO",
            ],
            datePublished: "2025-12-18",
            dateModified: "2026-01-28",
            readingTime: "7 min read",
        },

        hero: {
            h1: "Hire Shopify Developer",
            intro:
                "If your Shopify store needs clean theme customization, OS 2.0 sections, performance improvements, or conversion-focused UI upgrades, this page outlines a straightforward way to work together. The focus is fast delivery, upgrade-safe structure, and measurable improvements to how your storefront feels and performs.",
            primaryCta: { label: "Contact / Start a project", href: "/contact" },
            secondaryCta: { label: "View Projects", href: "/projects" },
        },

        sections: [
            {
                id: "services",
                title: "Services (what I can build and improve)",
                body:
                    "This is outcome-focused Shopify development. I build features that improve speed, clarity, and maintainability—without adding unnecessary app bloat.\n\nCommon client requests include:",
                list: [
                    {
                        title: "Shopify Theme Customization (Dawn + OS 2.0)",
                        desc:
                            "Pixel-clean edits to existing themes, section upgrades, and layout improvements without breaking Shopify updates.",
                    },
                    {
                        title: "Custom Sections (App-free features)",
                        desc:
                            "Reusable OS 2.0 sections like bundles, breadcrumbs, advanced UI blocks, and marketing sections—built for speed.",
                    },
                    {
                        title: "Performance Optimization (Core Web Vitals)",
                        desc:
                            "Improve LCP/INP/CLS by reducing render-blocking Liquid, optimizing assets, and cleaning frontend execution.",
                    },
                    {
                        title: "Product & Collection UX Improvements",
                        desc:
                            "Better product discovery, cleaner PDP/collection layouts, and navigation improvements that support conversion.",
                    },
                    {
                        title: "Shopify Front-end Features (JS / AJAX)",
                        desc:
                            "Dynamic behaviors like filtering, sliders, UI enhancements—implemented responsibly with minimal bloat.",
                    },
                ],
            },
            {
                id: "process",
                title: "Process (how we work)",
                body:
                    "Shopify work goes best when it’s clear, iterative, and safe. My process keeps you in control while ensuring quality delivery.",
                list: [
                    {
                        title: "1) Quick audit",
                        desc:
                            "You share your store URL + goals. I review theme structure, performance bottlenecks, and UX opportunities.",
                    },
                    {
                        title: "2) Clear plan + estimate",
                        desc:
                            "I propose the approach (safe theme edits vs custom sections), timeline, and what success looks like.",
                    },
                    {
                        title: "3) Build & iterate",
                        desc:
                            "Work is delivered in small checkpoints so you can review fast. Clean code + upgrade-safe structure.",
                    },
                    {
                        title: "4) QA + launch",
                        desc:
                            "Cross-device testing, performance checks, and deployment with rollback safety.",
                    },
                    {
                        title: "5) Handover",
                        desc:
                            "Short documentation so your team can maintain, extend, and ship future updates confidently.",
                    },
                ],
            },
            {
                id: "proof",
                title: "Proof and examples",
                body:
                    "If you want to validate my style before reaching out, the projects page contains real work examples and case-study style breakdowns.\n\nYou can also explore the supporting topic page below (freelance intent) to see how I approach Shopify work as an independent developer.",
            },
            {
                id: "what-to-send",
                title: "What to send to get started",
                body:
                    "To get a quick estimate, send your store URL along with a brief description of what you want improved. If you have specific pages, examples, or screenshots, include those too.\n\nThe more context you provide, the faster I can propose a clear plan and estimate.",
            },
            {
                id: "timeline",
                title: "Typical timeline",
                body:
                    "Most Shopify development projects are delivered within 1-3 weeks, depending on scope. After the initial audit and plan, I provide a more precise timeline based on the work involved.",
            },
            {
                id: "shopify-developer-in-different-locations",
                title: "Shopify Developer in Different Locations",
                body:
                    "I also offer specialized Shopify development services tailored to specific regions. These location-based pages outline how I support stores in various countries with remote development, clear communication, and timezone-aligned workflows.",
                cta: [
                    { label: "USA", href: "/shopify-developer-in/usa" },
                    { label: "Hungary", href: "/shopify-developer-in/hungary" },
                    { label: "Germany", href: "/shopify-developer-in/germany" },
                    { label: "UK", href: "/shopify-developer-in/uk" }

                ]
            }
        ],

        cta: {
            title: "Want a clear plan for your Shopify store?",
            desc:
                "Send your store URL and what you want improved (speed, sections, layout, PDP/collection UX). I’ll reply with the fastest route to results.",
            button: { label: "Go to Contact", href: "/contact" },
        },

        faq: {
            enabled: true,
            title: "FAQ",
            items: [
                {
                    q: "What Shopify work do you handle?",
                    a:
                        "Theme customization, Online Store 2.0 sections, Liquid/JS enhancements, performance optimization, and CRO-focused UX improvements for product and collection pages.",
                },
                {
                    q: "Do you work with Dawn and Shopify 2.0 themes?",
                    a:
                        "Yes. I build upgrade-safe customizations using OS 2.0 sections/snippets and Shopify-native patterns whenever possible.",
                },
                {
                    q: "Can you improve my store speed without ruining design?",
                    a:
                        "Yes. The goal is to keep the UI intact while reducing render-blocking assets, optimizing images, minimizing heavy scripts, and simplifying Liquid rendering paths.",
                },
                {
                    q: "Do you replace apps with custom code?",
                    a:
                        "When it makes sense. If an app is slowing the store or adding recurring cost, I can often replace it with a lightweight section or snippet.",
                },
                {
                    q: "How do we start?",
                    a:
                        "Send your store URL and what you want to improve. If you already know the scope, include example pages or screenshots.",
                },
            ],
        },

        internalLinks: {
            title: "Explore more",
            items: [
                { label: "Shopify Developer", href: "/shopify-developer" },
                { label: "Freelance Shopify Developer", href: "/freelance-shopify-developer" },
                { label: "Projects", href: "/projects" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
            ],
        },
    },

    {
        slug: "freelance-shopify-developer",
        type: "support-page",
        seo: {
            title: "Freelance Shopify Developer | Fast Execution for Store Growth",
            description:
                "Freelance Shopify developer for OS 2.0 theme customization, custom sections, and speed optimization. Flexible collaboration, clear deliverables, and upgrade-safe code.",
            canonical: "https://abedin.online/freelance-shopify-developer",
            tags: [
                "Freelance Shopify Developer",
                "Shopify Developer Freelancer",
                "Online Store 2.0",
                "Liquid Theme Developer",
                "Shopify Speed Optimization",
            ],
            datePublished: "2026-01-29",
            dateModified: "2026-01-29",
            readingTime: "6 min read",
        },

        hero: {
            h1: "Freelance Shopify Developer",
            intro:
                "A freelance Shopify developer is a flexible way to improve your storefront without the overhead of hiring full-time. I work independently with Shopify store owners and teams to ship OS 2.0 sections, theme improvements, and performance-focused upgrades. The focus is fast execution, clean code, and a storefront that stays maintainable as your marketing and product strategy evolves.",
            primaryCta: { label: "Hire Shopify Developer", href: "/hire-shopify-developer" },
            secondaryCta: { label: "View Projects", href: "/projects" },
        },

        sections: [
            {
                id: "why",
                title: "Why hire a freelance Shopify developer",
                body:
                    "Freelance Shopify development is ideal when you need expert execution with a clear outcome—like building a new OS 2.0 section, improving product page UX, or optimizing performance. You get direct communication, fast iteration, and a tighter feedback loop compared to high-overhead delivery models.\n\nIt also helps when you want work done in focused sprints. Many stores need strong improvements in short windows (campaign launches, seasonal collections, site redesign upgrades). A freelance model fits that reality: implement changes quickly, test properly, and keep the storefront stable.",
            },
            {
                id: "work",
                title: "Types of Shopify work I handle",
                body:
                    "I specialize in front-end Shopify development that impacts customer experience, speed, and conversion clarity. Common freelance requests include:",
                list: [
                    {
                        title: "Theme customization (Dawn + OS 2.0)",
                        desc:
                            "Upgrade-safe theme edits across homepage, product, collection, and content templates—delivered with clean, maintainable structure.",
                    },
                    {
                        title: "Custom sections (app-free features)",
                        desc:
                            "Reusable OS 2.0 sections such as landing blocks, bundles, breadcrumbs, and marketing components built to be editable in the theme editor.",
                    },
                    {
                        title: "Performance optimization",
                        desc:
                            "Core Web Vitals improvements through asset optimization, render-path cleanup, and responsible JavaScript usage—especially important on mobile.",
                    },
                    {
                        title: "PDP and collection UX improvements",
                        desc:
                            "Better layout consistency, improved product discovery, and clearer information hierarchy that supports conversion decisions.",
                    },
                ],
            },
            {
                id: "collaboration",
                title: "How clients usually work with me",
                body:
                    "Most projects start with a store URL and a short goal statement. From there, I propose a plan, estimate, and the safest implementation approach. Work is delivered in checkpoints so you can review early and adjust direction.\n\nI keep development organized and upgrade-safe, test across breakpoints, and ensure changes don’t break Shopify editor behavior. When the work is done, I provide a short handover note so your team can maintain and extend it.",
                list: [
                    {
                        title: "Sprint-based delivery",
                        desc:
                            "Small iterations with quick review cycles—ideal for stores that want fast improvement without long timelines.",
                    },
                    {
                        title: "Direct communication",
                        desc:
                            "You work with the person implementing the changes, which reduces miscommunication and speeds up delivery.",
                    },
                    {
                        title: "Maintainable outcomes",
                        desc:
                            "The work is structured so future features and campaigns can be added without slowing down the store.",
                    },
                ],
            },
        ],

        cta: {
            title: "If you’re ready, the hire page shows everything clearly",
            desc:
                "The hire page covers services, process, and what to send so I can estimate quickly. If you want to move fast, start there.",
            button: { label: "Go to Hire Page", href: "/hire-shopify-developer" },
        },

        // Day 6 requirement: NO FAQ schema, NO Service schema
        faq: { enabled: false, title: "", items: [] },

        internalLinks: {
            title: "Explore more",
            items: [
                { label: "Shopify Developer", href: "/shopify-developer" },
                { label: "Hire Shopify Developer", href: "/hire-shopify-developer" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
            ],
        },
    },
];