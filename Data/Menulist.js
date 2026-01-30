import { blogs } from "@/Data/Blogs"
import { authorityPages } from "./AuthorityPages"

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
    },
    authorityPage:
        authorityPages.map(page => ({
            title: page.slug,
            link: `${page.slug}`
        }))

}