import { blogs } from "@/Data/Blogs"
import { authorityPages } from "./AuthorityPages"
import { locationPages } from "./locationPages"
import { projects } from "./projects"

export const menu = {
    headerlist: [
        {
            title: 'Home',
            link: "/"
        },
        {
            title: 'about',
            link: "about"
        },
        {
            title: 'contact',
            link: "contact"
        },
        {
            title: "Projects",
            link: "projects",
            subMenu:
                projects.map(blog => ({
                    title: blog.slug,
                    link: `${blog.slug}`
                })),
            additional: {
                title: "Git Repos",
                link: "git"
            }

        },
        {
            title: "Articles",
            link: "blogs",
            subMenu:
                blogs.map(blog => ({
                    title: blog.slug,
                    link: `${blog.slug}`
                }))
        },
    ],


    authorityPage:
        authorityPages.map(page => ({
            title: page.slug,
            link: `${page.slug}`
        })),
    locationBased:
        locationPages.map(page => ({
            title: page.title,
            link: `shopify-developer-in/${page.slug}`
        }))
}