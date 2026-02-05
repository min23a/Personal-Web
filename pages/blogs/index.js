import Layout from "@/Components/Layout";

import { blogs } from "@/Data/Blogs";
import BlogGrid from "@/Snippet/BlogGrid";
import Pagewidth from "@/Snippet/Pagewidth";

export default function BlogIndex() {
    return (
        <Layout>
            <Pagewidth>
                <h1 className="text-4xl font-bold">Articles & Guides</h1>

                <p className="mt-4 max-w-3xl">
                    Practical guides on Shopify development, performance, and hiring
                    decisions—written for store owners and teams.
                </p>

                <BlogGrid
                    title="Latest articles"
                    items={blogs}
                    hrefPrefix="/blogs"
                />
            </Pagewidth>
        </Layout>
    );
}
