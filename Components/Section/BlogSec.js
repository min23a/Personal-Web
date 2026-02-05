import { blogs } from '@/Data/Blogs'
import BlogGrid from '@/Snippet/BlogGrid';
import { Heading } from '@/Snippet/Typograph';
import Link from 'next/link';
import React from 'react'

const BlogSec = ({ title, maxblogs }) => {
    if (maxblogs) {
        const data = blogs.slice(0, maxblogs);
        return (
            <>
                <BlogGrid
                    headingcls="text-center"
                    title={title}
                    items={data}
                    hrefPrefix="/blogs"
                />
                {
                    maxblogs ?
                        <Link href={"/blogs"} className="my-6 flex justify-center max-w-[50%] sm:max-w-[30%] mx-auto px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors animate-on-scroll animate-fade-up">
                            View All
                        </Link>
                        : null
                }
            </>
        )
    }

    return (
        <>
            <BlogGrid
                headingcls="text-center"
                title={title}
                items={blogs}
                hrefPrefix="/blogs"
            />
        </>
    )
}

export default BlogSec