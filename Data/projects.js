import cro from '@/Images/CRO.png'
import casep from '@/Images/Case.png'
import full from '@/Images/Full.png'
import nex from '@/Images/nex.png'
import sec from '@/Images/sections.png'
import starter from '@/Images/starter.png'
import web from '@/Images/web.png'
import ai from '@/Images/ai.png'

export const projects = [
    {
        title: "GreatNess",
        slug: "greatness-shopify-cro",
        description:
            "Enhanced branding, built custom homepage and product sections, and optimized theme performance.",
        detailed_desc:
            "This project focused on transforming an under-optimized Shopify storefront into a high-performance, scalable, and brand-consistent digital experience.",

        case_study: [
            {
                title: "Problem",
                body:
                    "The existing storefront lacked a strong brand identity and suffered from inconsistent UI components across pages.\n\nHeavy third-party apps, inefficient Liquid logic, and unoptimized assets negatively impacted Core Web Vitals and conversion flow."
            },
            {
                title: "Solution",
                body:
                    "Redesigned homepage and product page architecture using Shopify Online Store 2.0.\n\nBuilt modular custom sections, refactored Liquid templates, optimized asset loading, and replaced app-based features with lightweight native implementations."
            },
            {
                title: "Impact",
                body:
                    "Improved visual hierarchy, reduced layout shifts, and created a flexible UI system.\n\nPerformance improvements led to smoother interactions and better scalability for future features."
            },
            {
                title: "Result",
                body:
                    "Delivered a faster, cleaner, and more maintainable storefront.\n\nThe brand gained a scalable theme architecture with improved UX and reduced technical debt."
            }
        ],

        architecture: [
            {
                title: "Theme Architecture",
                body:
                    "Rebuilt the theme around OS 2.0 sections and reusable snippets to ensure modularity and upgrade safety.\n\nSimplified Liquid rendering to reduce redundant loops and improve readability."
            },
            {
                title: "Performance Strategy",
                body:
                    "Implemented responsive image loading, deferred scripts, and minimized CSS.\n\nJavaScript features were isolated to load only when necessary, reducing main-thread workload."
            }
        ],

        role: "Shopify Front-End Developer",
        type: "Client Project",
        impact: {
            performance:
                "LCP and INP improved through asset optimization and cleaner Liquid rendering",
            cro: "Improved product page clarity and layout consistency",
            business: "Reduced reliance on third-party apps",
        },
        photo: { src: cro, alt: "CRO Project Image", priority: false },
        tools: [
            "Shopify",
            "Dawn / Online Store 2.0",
            "Liquid",
            "JavaScript (ES6)",
            "HTML5",
            "CSS/SCSS",
            "Core Web Vitals",
        ],
        link: "https://greattness.com/",
        stars: 5
    },

    {
        title: "The Case Place",
        slug: "the-case-place-ui-revamp",
        description:
            "Revamped storefront UI and implemented a consistent brand system through theme customization.",
        detailed_desc:
            "This project focused on building a cohesive visual identity and improving navigation clarity across the storefront.",

        case_study: [
            {
                title: "Problem",
                body:
                    "The storefront lacked a unified design system, resulting in inconsistent typography, spacing, and layout patterns.\n\nNavigation and product presentation were not optimized for user flow."
            },
            {
                title: "Solution",
                body:
                    "Introduced a consistent UI system with standardized typography, spacing, and component patterns.\n\nRedesigned product cards and navigation structure while maintaining Shopify theme compatibility."
            },
            {
                title: "Impact",
                body:
                    "Improved visual consistency and user navigation.\n\nEnhanced readability and product discoverability across pages."
            },
            {
                title: "Result",
                body:
                    "A cleaner, more intuitive storefront with stronger brand identity.\n\nThe UI system now supports scalable design updates without breaking existing layouts."
            }
        ],

        architecture: [
            {
                title: "UI System Design",
                body:
                    "Standardized Liquid snippets and reusable components across templates.\n\nUnified responsive breakpoints and styling conventions."
            }
        ],

        role: "Shopify Theme Developer",
        type: "Client Project",
        impact: {
            ux: "Clearer visual hierarchy and improved product presentation",
            cro: "More intuitive navigation and category structure",
        },
        photo: { src: casep, alt: "The Case Place Project Image", priority: false },
        tools: ["Shopify", "Online Store 2.0", "Liquid", "JavaScript", "HTML", "CSS"],
        link: "https://thecaseplace.com/",
        stars: 5
    },

    {
        title: "Full Battery",
        slug: "full-battery-3d-product-experience",
        description:
            "Updated existing theme without disrupting brand identity and enabled 3D product viewing.",
        detailed_desc:
            "This project focused on enhancing product interaction while preserving brand consistency.",

        case_study: [
            {
                title: "Problem",
                body:
                    "The existing product pages lacked immersive visualization and interactive product media.\n\nTheme updates needed to be implemented without breaking brand identity."
            },
            {
                title: "Solution",
                body:
                    "Integrated Shopify’s native 3D product media into the gallery system.\n\nRefined UI interactions and responsive layouts while preserving existing design elements."
            },
            {
                title: "Impact",
                body:
                    "Improved product understanding and engagement.\n\nEnhanced user interaction with immersive media."
            },
            {
                title: "Result",
                body:
                    "A richer product experience without sacrificing performance or design stability."
            }
        ],

        architecture: [
            {
                title: "Media Integration",
                body:
                    "Implemented Shopify Media API with progressive loading and fallback handling.\n\nScoped UI updates to avoid breaking existing layouts."
            }
        ],

        role: "Shopify Front-End Developer",
        impact: {
            ux: "Improved product understanding via interactive 3D media",
            engagement: "Longer product page interaction time",
        },
        photo: { src: full, alt: "Full Battery Project Image", priority: false },
        tools: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS", "Shopify 3D Product Media"],
        link: "https://fullbattery.com/",
        stars: 5
    },

    {
        title: "Nexmetal",
        slug: "nexmetal-theme-optimization",
        description:
            "Enhanced theme structure and implemented front-end improvements for a metallic products store.",
        detailed_desc:
            "This project focused on simplifying theme architecture and improving maintainability.",

        case_study: [
            {
                title: "Problem",
                body:
                    "The theme structure was complex, with duplicated Liquid logic and inconsistent components."
            },
            {
                title: "Solution",
                body:
                    "Refactored sections and snippets into reusable components and simplified markup."
            },
            {
                title: "Impact",
                body:
                    "Reduced technical complexity and improved theme scalability."
            },
            {
                title: "Result",
                body:
                    "A cleaner, faster, and easier-to-maintain Shopify theme."
            }
        ],

        architecture: [
            {
                title: "Code Refactoring",
                body:
                    "Introduced modular Liquid architecture and consistent naming conventions."
            }
        ],

        role: "Shopify Theme Customization Specialist",
        type: "Client Project",
        impact: {
            performance: "Cleaner front-end structure and reduced layout overhead",
            maintainability: "Simplified theme components for future updates",
        },
        photo: { src: nex, alt: "Nexmetal Project Image", priority: false },
        tools: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS"],
        link: "https://nexmetal.com/",
        stars: 5
    },

    {
        title: "Tag Filtering",
        slug: "shopify-or-tag-filtering",
        description:
            "Built a custom OR-based tag filtering system to overcome Shopify’s default AND filtering limitation.",
        detailed_desc:
            "This project extended Shopify’s filtering logic without relying on third-party apps.",

        case_study: [
            {
                title: "Problem",
                body:
                    "Shopify’s native tag filtering only supports AND logic, limiting product discovery."
            },
            {
                title: "Solution",
                body:
                    "Built an OR-based filtering system using parallel AJAX requests and result merging."
            },
            {
                title: "Impact",
                body:
                    "Enabled flexible product discovery with improved UX."
            },
            {
                title: "Result",
                body:
                    "A performant, app-free filtering system integrated with Dawn’s facet UI."
            }
        ],

        architecture: [
            {
                title: "Filtering Engine",
                body:
                    "Implemented parallel fetch requests, merged HTML responses, and deduplicated products in JavaScript."
            }
        ],

        role: "Shopify Front-End Engineer",
        type: "Client Project",
        impact: {
            ux: "More flexible product discovery",
            cro: "Higher relevance in filtered results",
            technical: "App-free solution with native AJAX rendering",
        },
        photo: { src: full, alt: "Full Battery Collection Project Image", priority: false },
        tools: ["Shopify", "Dawn Theme", "Liquid", "JavaScript (AJAX)", "HTML", "CSS"],
        link: "https://fullbattery.com/",
        stars: 5
    },

    {
        title: "custom-sections",
        slug: "shopify-custom-sections-library",
        description:
            "Developed reusable, app-free Shopify sections such as breadcrumbs, product bundlers, and tag filters.",
        detailed_desc:
            "This project created a reusable Shopify component library focused on performance and scalability.",

        case_study: [
            {
                title: "Problem",
                body:
                    "Heavy reliance on third-party apps increased load time and technical debt."
            },
            {
                title: "Solution",
                body:
                    "Built reusable OS 2.0 sections with configurable schemas and modular logic."
            },
            {
                title: "Impact",
                body:
                    "Improved developer productivity and reduced app dependency."
            },
            {
                title: "Result",
                body:
                    "A scalable library of Shopify components reusable across multiple stores."
            }
        ],

        architecture: [
            {
                title: "Component System",
                body:
                    "Designed modular Liquid components with isolated JavaScript and flexible schema settings."
            }
        ],

        role: "Shopify Theme Developer",
        type: "Personal Project",
        impact: {
            developer_productivity: "Reusable sections across multiple stores",
            performance: "Reduced dependency on heavy third-party apps",
        },
        photo: { src: sec, alt: "Shopify Custom Sections Project Image", priority: false },
        tools: ["Shopify", "Liquid", "JavaScript", "CSS", "Online Store 2.0 JSON Templates"],
        repo: "https://github.com/min23a/shopify-custom-sections",
    },

    {
        title: "starter-theme",
        slug: "shopify-starter-theme-cli",
        description:
            "Created a starter Shopify theme with a local development workflow for faster theme iteration.",
        detailed_desc:
            "This project standardized Shopify theme development workflows.",

        case_study: [
            {
                title: "Problem",
                body:
                    "Starting new Shopify projects required repetitive setup and inconsistent structures."
            },
            {
                title: "Solution",
                body:
                    "Built a standardized starter theme optimized for Shopify CLI workflows."
            },
            {
                title: "Impact",
                body:
                    "Accelerated development cycles and improved maintainability."
            },
            {
                title: "Result",
                body:
                    "A reusable foundation for rapid Shopify theme development."
            }
        ],

        architecture: [
            {
                title: "Workflow Design",
                body:
                    "Structured theme folders, scripts, and CLI integration for scalable development."
            }
        ],

        role: "Shopify Theme Engineer",
        type: "Personal Project",
        impact: {
            workflow: "Faster development and testing using Shopify CLI",
            maintainability: "Standardized project structure",
        },
        photo: { src: starter, alt: "Shopify Starter Theme Project Image", priority: false },
        tools: ["Shopify", "Shopify CLI", "Liquid", "Sass", "Node.js", "npm"],
        repo: "https://github.com/min23a/shopify-starter-theme",
    },

    {
        title: "Personal-Web",
        slug: "nextjs-personal-portfolio",
        description:
            "Built a personal portfolio website to showcase projects and technical expertise.",
        detailed_desc:
            "This project focused on building a scalable, SEO-first portfolio platform.",

        case_study: [
            {
                title: "Problem",
                body:
                    "Most portfolios lack scalability, technical depth, and SEO structure."
            },
            {
                title: "Solution",
                body:
                    "Built a Next.js portfolio with dynamic routing, structured data, and SEO optimization."
            },
            {
                title: "Impact",
                body:
                    "Improved discoverability and performance."
            },
            {
                title: "Result",
                body:
                    "A high-performance, extensible portfolio platform."
            }
        ],

        architecture: [
            {
                title: "System Design",
                body:
                    "Implemented dynamic routes, JSON-LD schema, Tailwind UI, and automated sitemap generation."
            }
        ],

        role: "Front-End Developer",
        type: "Personal Project",
        impact: {
            branding: "Clear personal brand and project visibility",
            performance: "Fast-loading, SEO-friendly structure",
        },
        photo: { src: web, alt: "Personal Web Project Image", priority: true },
        tools: ["Next.js", "React", "JavaScript", "Tailwind CSS", "PostCSS", "Node.js"],
        repo: "https://github.com/min23a/Personal-Web",
        link: "https://abedin.online/",
    },

    {
        title: "agent-mistral",
        slug: "local-ai-report-agent",
        description:
            "Built a local AI-based report generation agent using a Mistral-driven workflow.",
        detailed_desc:
            "This project explored privacy-first AI automation.",

        case_study: [
            {
                title: "Problem",
                body:
                    "Manual report generation is time-consuming and often requires external AI APIs."
            },
            {
                title: "Solution",
                body:
                    "Built a fully local LLM pipeline using Mistral for document processing and report generation."
            },
            {
                title: "Impact",
                body:
                    "Automated complex workflows while preserving data privacy."
            },
            {
                title: "Result",
                body:
                    "A scalable local AI system reducing manual workload."
            }
        ],

        architecture: [
            {
                title: "AI Pipeline",
                body:
                    "Designed modular document ingestion, preprocessing, LLM inference, and structured output generation."
            }
        ],

        role: "AI / Automation Developer",
        type: "Personal Project",
        impact: {
            automation: "Reduced manual reporting effort",
            privacy: "Fully local execution without external APIs",
        },
        photo: { src: ai, alt: "Local Report Agent Mistral Project Image", priority: false },
        tools: ["Python", "Local LLM Workflow", "Mistral"],
        repo: "https://github.com/min23a/local-report-agent-mistral",
    }
];

export function getProjectBySlug(slug) {
    return projects.find((p) => p.slug === slug || p.title === slug);
}


export const projectSlugs = [
    "greatness-shopify-cro",
    "the-case-place-ui-revamp",
    "full-battery-3d-product-experience",
    "nexmetal-theme-optimization",
    "shopify-or-tag-filtering",
    "shopify-custom-sections-library",
    "shopify-starter-theme-cli",
    "nextjs-personal-portfolio",
    "local-ai-report-agent",
];
