import { personalData } from "./PersonalData";

export const seoMap = {
    home: {
        title: "Shopify Developer | Abedin",
        meta:
            "Shopify developer specializing in custom themes, apps, and Next.js integrations.",
        tags: personalData.tags.join(", "),
    },
    projects: {
        title: "Shopify Projects & Case Studies | Abedin",
        description:
            "Real Shopify development projects, case studies, and technical solutions.",
        tags: "Shopify, Projects, Case Studies, Development, Themes, Apps, Next.js",
    },
};
