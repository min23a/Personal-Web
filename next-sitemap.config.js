/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://abedin.online",
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: "weekly",
    priority: 0.7,
    exclude: ["/404", "/500"],
};