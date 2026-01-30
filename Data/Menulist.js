import { blogs } from "@/Data/Blogs"

export const menulist = {
    "list": ["home"],
    "external": ["about", "projects", "git", "contact"],
    blog: {
        title: "Articles",
        link: "blogs",
        subMenu:
            blogs.map(blog => ({
                title: blog.slug,
                link: `${blog.slug}`
            }))
    }
}