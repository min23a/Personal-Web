import BlogRenderer from '@/Components/BlogRenderer'
import JsonLd from '@/Components/JsonLd'
import Layout from '@/Components/Layout'
import { privacyPolicy } from '@/Data/PrivacyPolicy'
import { buildBlogSchema } from '@/Snippet/blogSchema'
import Pagewidth from '@/Snippet/Pagewidth'
import SEO from '@/Snippet/SEO'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <>
            <SEO path={privacyPolicy.slug} data={privacyPolicy.seo} />
            <Layout>
                <Pagewidth>
                    <BlogRenderer data={privacyPolicy} />
                </Pagewidth>
            </Layout>
        </>
    )
}

export default PrivacyPolicy