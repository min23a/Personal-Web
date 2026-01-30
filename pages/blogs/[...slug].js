import React from "react";
import { useRouter } from "next/router";
import Layout from "@/Components/Layout";
import BlogRenderer from "@/Components/BlogRenderer";
import SEO from "@/Snippet/SEO";
import JsonLd from "@/Components/JsonLd";
import { blogs } from "@/Data/Blogs";

export default function BlogDynamicPage() {
    const router = useRouter();
    const slug = router.query.slug;

    if (!router.isReady) return <div className="max-w-5xl mx-auto px-6 py-10">Loading...</div>;

    const page = blogs.find((b) => b.slug === slug[0]);

    if (!page) {
        return (
            <Layout>
                <div className="max-w-5xl mx-auto px-6 py-10">
                    <h1 className="text-2xl font-semibold">Not found</h1>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <SEO
                data={page.seo}
                path={`blogs/${page.slug}`}

            />
            <JsonLd data={""} />
            <BlogRenderer data={page} />
        </Layout>
    );
}
