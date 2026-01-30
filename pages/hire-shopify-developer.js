import React from "react";
import SEO from "@/Snippet/SEO";
import Layout from "@/Components/Layout";
import { schema } from "@/Data/SeoSchema";
import JsonLd from "@/Components/JsonLd";
import BlogRenderer from "@/Components/BlogRenderer";
import { authorityPages } from "@/Data/AuthorityPages";

const HireShopifyDeveloper = () => {
    const title = "Hire Shopify Developer | Md Minhazul Abedin";
    const description =
        "Hire a Shopify developer for theme customization, Online Store 2.0 sections, performance optimization, and CRO-focused storefront improvements.";
    const tags = [
        "Hire Shopify Developer",
        "Shopify Theme Customization",
        "Shopify Performance Optimization",
        "Shopify UX Improvements",
        "Shopify Online Store 2.0",
        "Shopify Developer for Hire",
    ];

    return (
        <>
            <SEO path={"hire-shopify-developer"} data={{ title, description, tags }} />
            <JsonLd data={schema.hirePage} />
            <Layout>
                <BlogRenderer data={authorityPages.find(b => b.slug === "hire-shopify-developer")} />
            </Layout>
        </>
    );
};

export default HireShopifyDeveloper;
