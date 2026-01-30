import BlogRenderer from '@/Components/BlogRenderer'
import JsonLd from '@/Components/JsonLd'
import Layout from '@/Components/Layout'
import { blogs } from '@/Data/Blogs'
import { schema } from '@/Data/SeoSchema'
import Pagewidth from '@/Snippet/Pagewidth'
import SEO from '@/Snippet/SEO'
import React from 'react'

const freelanceShopifyDeveloper = () => {
    const slug = "freelance-shopify-developer";

    const page = blogs.find((b) => b.slug === slug);


    return (
        <>
            <SEO data={page.seo} path={slug} />
            <JsonLd data={schema.FreelanceShopifyDeveloper} />
            <Layout>
                <Pagewidth>
                    <BlogRenderer data={page} />
                </Pagewidth>
            </Layout>
        </>
    )
}

export default freelanceShopifyDeveloper