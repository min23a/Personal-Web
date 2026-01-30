import Layout from "@/Components/Layout";
import BlogRenderer from "@/Components/BlogRenderer";
import SEO from "@/Snippet/SEO";
import JsonLd from "@/Components/JsonLd";
import { blogs } from "@/Data/Blogs";
import { buildBlogSchema } from "@/Snippet/blogSchema";

export default function BlogDynamicPage({ page }) {
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
        <>
            <SEO data={page.seo} path={`blogs/${page.slug}`} />
            <JsonLd data={buildBlogSchema(page)} />
            <Layout>
                <BlogRenderer data={page} />
            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    return {
        paths: blogs.map((b) => ({
            params: { slug: [b.slug] }, // ✅ must be an array
        })),
        fallback: false, // or "blocking" if you will add new blogs later
    };
}

export async function getStaticProps({ params }) {
    const actualSlug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
    const page = blogs.find((b) => b.slug === actualSlug) || null;

    return {
        props: { page },
        revalidate: 60, // optional ISR
    };
}
