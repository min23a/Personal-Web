import React from "react";
import Link from "next/link";
import { blogs } from "@/Data/Blogs";
import SEO from "@/Snippet/SEO";
import JsonLd from "@/Components/JsonLd";
import Layout from "@/Components/Layout";
import Accordion from "@/Snippet/Accordion";
import { Heading, SubHeading } from "@/Snippet/Typograph";
import { schema } from "@/Data/SeoSchema";
import Pagewidth from "@/Snippet/Pagewidth";
import BlogRenderer from "@/Components/BlogRenderer";


const ShopifyDeveloper = () => {
    const data = blogs.find(b => b.slug === "shopify-developer");
    return (
        <>
            <SEO path={data.slug} data={data.seo} />
            <JsonLd data={schema.ShopifyDeveloper} />
            <Layout>
                <Pagewidth>
                    <BlogRenderer data={data} />
                </Pagewidth>
            </Layout>
        </>
    );
};

export default ShopifyDeveloper;
