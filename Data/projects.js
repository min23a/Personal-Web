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
        description:
            "Enhanced branding, built custom homepage and product sections, and optimized theme performance.",
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
        description:
            "Revamped storefront UI and implemented a consistent brand system through theme customization.",
        role: "Shopify Theme Developer",
        type: "Client Project",
        impact: {
            ux: "Clearer visual hierarchy and improved product presentation",
            cro: "More intuitive navigation and category structure",
        },
        photo: { src: casep, alt: "The Case Place Project Image", priority: false },
        tools: [
            "Shopify",
            "Online Store 2.0",
            "Liquid",
            "JavaScript",
            "HTML",
            "CSS",
        ],
        link: "https://thecaseplace.com/",
        stars: 5
    },
    {
        title: "Full Battery",
        description:
            "Updated existing theme without disrupting brand identity and enabled 3D product viewing.",
        role: "Shopify Front-End Developer",
        impact: {
            ux: "Improved product understanding via interactive 3D media",
            engagement: "Longer product page interaction time",
        },
        photo: { src: full, alt: "Full Battery Project Image", priority: false },
        tools: [
            "Shopify",
            "Liquid",
            "JavaScript",
            "HTML",
            "CSS",
            "Shopify 3D Product Media",
        ],
        link: "https://fullbattery.com/",
        stars: 5
    },
    {
        title: "Nexmetal",
        description:
            "Enhanced theme structure and implemented front-end improvements for a metallic products store.",
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
        description:
            "Built a custom OR-based tag filtering system to overcome Shopify’s default AND filtering limitation.",
        role: "Shopify Front-End Engineer",
        type: "Client Project",
        impact: {
            ux: "More flexible product discovery",
            cro: "Higher relevance in filtered results",
            technical: "App-free solution with native AJAX rendering",
        },
        photo: { src: full, alt: "Full Battery Collection Project Image", priority: false },
        tools: [
            "Shopify",
            "Dawn Theme",
            "Liquid",
            "JavaScript (AJAX)",
            "HTML",
            "CSS",
        ],
        link: "https://fullbattery.com/",
        stars: 5
    },
    {
        title: "custom-sections",
        description:
            "Developed reusable, app-free Shopify sections such as breadcrumbs, product bundlers, and tag filters.",
        role: "Shopify Theme Developer",
        type: "Personal Project",
        impact: {
            developer_productivity: "Reusable sections across multiple stores",
            performance: "Reduced dependency on heavy third-party apps",
        },
        photo: { src: sec, alt: "Shopify Custom Sections Project Image", priority: false },
        tools: [
            "Shopify",
            "Liquid",
            "JavaScript",
            "CSS",
            "Online Store 2.0 JSON Templates",
        ],
        link: "https://github.com/min23a/shopify-custom-sections",
    },
    {
        title: "starter-theme",
        description:
            "Created a starter Shopify theme with a local development workflow for faster theme iteration.",
        role: "Shopify Theme Engineer",
        type: "Personal Project",
        impact: {
            workflow: "Faster development and testing using Shopify CLI",
            maintainability: "Standardized project structure",
        },
        photo: { src: starter, alt: "Shopify Starter Theme Project Image", priority: false },
        tools: ["Shopify", "Shopify CLI", "Liquid", "Sass", "Node.js", "npm"],
        link: "https://github.com/min23a/shopify-starter-theme",
    },
    {
        title: "Personal-Web",
        description:
            "Built a personal portfolio website to showcase projects and technical expertise.",
        role: "Front-End Developer",
        type: "Personal Project",
        impact: {
            branding: "Clear personal brand and project visibility",
            performance: "Fast-loading, SEO-friendly structure",
        },
        photo: { src: web, alt: "Personal Web Project Image", priority: true },
        tools: [
            "Next.js",
            "React",
            "JavaScript",
            "Tailwind CSS",
            "PostCSS",
            "Node.js",
        ],
        link: "https://github.com/min23a/Personal-Web",
    },
    {
        title: "agent-mistral",
        description:
            "Built a local AI-based report generation agent using a Mistral-driven workflow.",
        role: "AI / Automation Developer",
        type: "Personal Project",
        impact: {
            automation: "Reduced manual reporting effort",
            privacy: "Fully local execution without external APIs",
        },
        photo: { src: ai, alt: "Local Report Agent Mistral Project Image", priority: false },
        tools: ["Python", "Local LLM Workflow", "Mistral"],
        link: "https://github.com/min23a/local-report-agent-mistral",
    }
];
