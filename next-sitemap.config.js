const { projectSlugs } = require("./Data/projectSlugs");
// ^ adjust path if your folder is different

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://abedin.online",
    generateRobotsTxt: true,

    // Split for scale (safe even if small)
    sitemapSize: 5000,

    // Helps keep crawlers focused
    exclude: ["/404", "/500", "/api/*", "/admin/*"],

    changefreq: "weekly",
    priority: 0.7,

    // Add dynamic project URLs
    additionalPaths: async (config) => {
        const now = new Date().toISOString();

        return projectSlugs.map((slug) => ({
            loc: `/projects/${slug}`,
            changefreq: "monthly",
            priority: 0.8,
            lastmod: now,
        }));
    },

    // Optional: boost homepage priority
    transform: async (config, path) => {
        const now = new Date().toISOString();

        return {
            loc: path,
            changefreq: config.changefreq,
            priority: path === "/" ? 1.0 : config.priority,
            lastmod: now,
        };
    },

    robotsTxtOptions: {
        policies: [{ userAgent: "*", allow: "/" }],
    },
};
