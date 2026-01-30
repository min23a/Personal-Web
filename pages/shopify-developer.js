import React from "react";
import SEO from "@/Snippet/SEO";
import JsonLd from "@/Components/JsonLd";
import Layout from "@/Components/Layout";
import { schema } from "@/Data/SeoSchema";
import Pagewidth from "@/Snippet/Pagewidth";
import BlogRenderer from "@/Components/BlogRenderer";
import { authorityPages } from "@/Data/AuthorityPages";


const ShopifyDeveloper = () => {
    const data = authorityPages.find(b => b.slug === "shopify-developer");
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
